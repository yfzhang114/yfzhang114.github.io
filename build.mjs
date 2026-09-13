import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { profile, publicationGroups, news } from './_src/site-data.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link = (url, label) => `<a href="${escape(url)}">${escape(label)}</a>`;
const authorLine = authors => escape(authors).replace(/Yi-Fan Zhang|YiFan Zhang|Yifan Zhang/g, '<strong>$&</strong>');
const papers = publicationGroups.map(group => `<div class="publication-group">
  <h3 class="pub-year">${escape(group.title)}</h3>
  ${group.description ? `<p class="group-description">${escape(group.description)}</p>` : ''}
  ${group.papers.map(paper => `<article class="pub-item">
    <h4 class="pub-title">${link(paper.paper, paper.title)}</h4>
    <p class="pub-authors">${authorLine(paper.authors)}</p>
    <p class="pub-venue"><span class="venue-name">${escape(paper.venue)}</span>${paper.distinction ? ` <span class="pub-badge spotlight">${escape(paper.distinction)}</span>` : ''}${paper.role ? ` <span class="pub-badge">${escape(paper.role)}</span>` : ''}</p>
    ${paper.description ? `<p class="pub-description">${escape(paper.description)}</p>` : ''}
    <div class="pub-links">${[['paper','Paper'],['code','Code'],['project','Project']].filter(([key]) => paper[key]).map(([key,label]) => link(paper[key],label)).join('\n')}</div>
  </article>`).join('\n')}
</div>`).join('\n');

const newsRows = items => items.map(([date,body]) => `<li class="news-item"><span class="news-date">${escape(date)}</span><div>${body}</div></li>`).join('\n');
const replacements = {
  NAME: escape(profile.name), AFFILIATION: escape(profile.affiliation), EDUCATION: escape(profile.education),
  EMAIL: escape(profile.email), SCHOLAR: escape(profile.scholar), UPDATED: escape(profile.updated), UPDATED_ISO: profile.updatedISO,
  METRICS: profile.metrics.map(m => `<div><dt>${escape(m.label)}</dt><dd>${escape(m.value)}</dd></div>`).join('\n'),
  PUBLICATIONS: papers,
  NEWS: newsRows(news.slice(0,6)),
  OLDER_NEWS: newsRows(news.slice(6)),
};
let html = await fs.readFile(path.join(root, '_src/template.html'), 'utf8');
html = html.replace(/\{\{([A-Z_]+)\}\}/g, (_, key) => {
  if (!(key in replacements)) throw new Error(`Unknown template field: ${key}`);
  return replacements[key];
});
if (/\{\{[A-Z_]+\}\}/.test(html)) throw new Error('Unresolved template fields');
if (/href=["']#["']/.test(html)) throw new Error('Empty link found');
html = html.replace(/[\t ]+$/gm, '').trimEnd() + '\n';
await fs.writeFile(path.join(root, 'index.html'), html);
console.log(`Built index.html: ${publicationGroups.reduce((n,g)=>n+g.papers.length,0)} publications, ${news.length} news entries.`);
