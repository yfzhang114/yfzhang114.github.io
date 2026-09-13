// Public profile content. Numbers are dated snapshots, not live API results.
export const profile = {
  name: 'Yi-Fan Zhang (张一帆)',
  updated: 'September 13, 2026',
  updatedISO: '2026-09-13',
  affiliation: 'ByteDance Seed',
  education: 'Ph.D. Candidate, CASIA / University of Chinese Academy of Sciences',
  scholar: 'https://scholar.google.com/citations?user=lUnt8X4AAAAJ',
  email: 'yifanzhang.cs@gmail.com',
  metrics: [
    { value: '7,000+', label: 'Total citations' },
    { value: '2,600+', label: 'Citations on my most-cited first-author paper' },
    { value: '7', label: 'First / co-first-author papers with 100+ citations' },
  ],
};

export const publicationGroups = [
  {
    title: 'Interaction, Streaming Perception & Multimodal Agents',
    description: 'Selected collaborations and first-author work that connect to my current interests.',
    papers: [
      {
        title: 'PEARL: Personalized Streaming Video Understanding Model',
        authors: 'Yuanhong Zheng, Ruichuan An, Xiaopeng Lin, …, Yifan Zhang, …',
        venue: 'Preprint, 2026',
        paper: 'https://arxiv.org/abs/2603.20422',
        description: 'Personalized concept understanding and evaluation over continuous video streams.',
      },
      {
        title: 'VITA-1.5: Towards GPT-4o Level Real-Time Vision and Speech Interaction',
        authors: 'Chaoyou Fu, Haojia Lin, Xiong Wang, Yi-Fan Zhang, et al.',
        venue: 'NeurIPS 2025', distinction: 'Spotlight',
        paper: 'https://arxiv.org/abs/2501.01957', code: 'https://github.com/VITA-MLLM/VITA',
        description: 'Real-time vision and speech interaction in an open-source multimodal model.',
      },
      {
        title: 'VITA-E: Natural Embodied Interaction with Concurrent Seeing, Hearing, Speaking, and Acting',
        authors: 'Xiaoyu Liu, Chaoyou Fu, Chi Yan, Chu Wu, Haihan Gao, Yi-Fan Zhang, et al.',
        venue: 'Preprint, 2025', paper: 'https://arxiv.org/abs/2510.21817',
        description: 'Concurrent multimodal perception, speech, and action for embodied interaction.',
      },
      {
        title: 'Omni-DeepSearch: A Benchmark for Audio-Driven Omni-Modal Deep Search',
        authors: 'Tao Yu, Yiming Ding, Shenghua Chai, …, YiFan Zhang, …',
        venue: 'Preprint, 2026', paper: 'https://arxiv.org/abs/2605.08762',
        description: 'Starting from audio to search for evidence across text, images, and video.',
      },
      {
        title: 'Thyme: Think Beyond Images',
        authors: 'Yi-Fan Zhang, et al.', role: 'First Author',
        venue: 'ICLR 2026', paper: 'https://arxiv.org/abs/2508.11630',
        code: 'https://github.com/yfzhang114/Thyme', project: 'https://thyme-vl.github.io/',
        description: 'Image processing and computation through executable code for multimodal reasoning.',
      },
      {
        title: 'Skywork-R1V4: Toward Agentic Multimodal Intelligence through Interleaved Thinking with Images and DeepResearch',
        authors: 'Yi-Fan Zhang, et al.', role: 'First Author', venue: 'Technical Report, 2025',
        paper: 'https://arxiv.org/abs/2512.02395', project: 'https://skywork-r1v4-lite.netlify.app/',
        description: 'Interleaved visual reasoning and search in agentic multimodal systems.',
      },
      {
        title: 'VITA: Towards Open-Source Interactive Omni Multimodal LLM',
        authors: 'Chaoyou Fu, Haojia Lin, Zuwei Long, Yunhang Shen, Yidong Dai, Meng Zhao, Yi-Fan Zhang, et al.',
        venue: 'Preprint, 2024', paper: 'https://arxiv.org/abs/2408.05211',
        code: 'https://github.com/VITA-MLLM/VITA',
      },
    ],
  },
  {
    title: 'Post-Training & Reward Modeling',
    papers: [
      {
        title: 'R1-Reward: Training Multimodal Reward Model Through Stable Reinforcement Learning',
        authors: 'Yi-Fan Zhang, et al.', role: 'First Author', venue: 'ICLR 2026',
        paper: 'https://arxiv.org/abs/2505.02835', code: 'https://github.com/yfzhang114/r1_reward',
      },
      {
        title: 'BaseReward: A Strong Baseline for Multimodal Reward Model',
        authors: 'Yi-Fan Zhang, et al.', role: 'First Author', venue: 'ICLR 2026',
        paper: 'https://arxiv.org/abs/2509.16127',
      },
      {
        title: 'MM-RLHF: The Next Step Forward in Multimodal LLM Alignment',
        authors: 'Yi-Fan Zhang, et al.', role: 'First Author', venue: 'ICML 2025',
        paper: 'https://arxiv.org/abs/2502.10391', code: 'https://github.com/yfzhang114/MM-RLHF',
        project: 'https://mm-rlhf.github.io/',
      },
      {
        title: 'Debiasing Multimodal Large Language Models via Penalization of Language Priors',
        authors: 'Yi-Fan Zhang, et al.', role: 'First Author', venue: 'ACM MM 2025',
        paper: 'https://arxiv.org/abs/2403.05262', code: 'https://github.com/yfzhang114/LLaVA-Align',
      },
    ],
  },
  {
    title: 'Multimodal Training & Evaluation',
    papers: [
      {
        title: 'MME-RealWorld: Could Your Multimodal LLM Challenge High-Resolution Real-World Scenarios that are Difficult for Humans?',
        authors: 'Yi-Fan Zhang, et al.', role: 'First Author', venue: 'ICLR 2025',
        paper: 'https://arxiv.org/abs/2408.13257', code: 'https://github.com/yfzhang114/MME-RealWorld',
        project: 'https://mme-realworld.github.io/',
      },
      {
        title: 'Beyond LLaVA-HD: Diving into High-Resolution Large Multimodal Models',
        authors: 'Yi-Fan Zhang, et al.', role: 'First Author', venue: 'IEEE TPAMI 2025',
        paper: 'https://arxiv.org/abs/2406.08487', code: 'https://github.com/yfzhang114/SliME',
      },
      {
        title: 'Kwai Keye-VL 1.5 Technical Report',
        authors: 'Keye Team, including Yi-Fan Zhang (Main Contributor)', role: 'Main Contributor',
        venue: 'Technical Report, 2025', paper: 'https://arxiv.org/abs/2509.01563',
        code: 'https://github.com/Kwai-Keye/Keye',
      },
      {
        title: 'MME-Unify: A Comprehensive Benchmark for Unified Multimodal Understanding and Generation Models',
        authors: 'Wulin Xie*, Yi-Fan Zhang*, Chaoyou Fu, et al.', role: 'Co-first Author',
        venue: 'ICLR 2026', paper: 'https://arxiv.org/abs/2504.03641',
        code: 'https://github.com/MME-Benchmarks/MME-Unify', project: 'https://mme-unify.github.io/',
      },
      {
        title: 'RealUnify: Do Unified Models Truly Benefit from Unification? A Comprehensive Benchmark',
        authors: 'Yang Shi, Yuhao Dong, Yue Ding, …, Yi-Fan Zhang†, et al.', role: 'Corresponding Author',
        venue: 'CVPR 2026', paper: 'https://arxiv.org/abs/2509.24897',
      },
    ],
  },
];

export const news = [
  ['Sep 2026', 'My current research focus is real-time multimodal interaction, voice agents, and streaming audio-visual systems. I am currently with <a href="https://seed.bytedance.com/en/">ByteDance Seed</a>.'],
  ['2026', 'Recent work includes <a href="https://arxiv.org/abs/2603.20422">PEARL</a> on personalized streaming video understanding and <a href="https://arxiv.org/abs/2605.08762">Omni-DeepSearch</a> on audio-driven multimodal search.'],
  ['Feb 2026', 'Two papers, RealUnify and Long-Term Personalized Multimodal LLMs, accepted by <strong>CVPR 2026</strong>.'],
  ['Jan 2026', 'Six papers, Thyme, R1-Reward, BaseReward, MME-Unify, MME-Emotion, and AudioTrust, accepted by <strong>ICLR 2026</strong>.'],
  ['Dec 2025', 'Two papers accepted by <strong>IEEE TPAMI</strong>.'],
  ['Oct 2025', '<strong>VITA-1.5 (Spotlight)</strong> and MME-VideoOCR accepted by <strong>NeurIPS 2025</strong>.'],
  ['Sep 2025', 'Released <a href="https://thyme-vl.github.io/">Thyme</a>, thinking beyond images with executable code generation.'],
  ['Jul 2025', 'Released <a href="https://github.com/Kwai-Keye/Keye">Kwai Keye-VL</a>.'],
  ['May 2025', '<a href="https://mm-rlhf.github.io/">MM-RLHF</a> and <a href="https://arxiv.org/abs/2502.01943">DAMO</a> accepted by <strong>ICML 2025</strong>. Released <a href="https://github.com/yfzhang114/r1_reward">R1-Reward</a>.'],
  ['Apr 2025', 'Released <a href="https://mme-unify.github.io/">MME-Unify</a> for unified multimodal models.'],
  ['Feb 2025', 'Released <a href="https://github.com/yfzhang114/MM-RLHF">MM-RLHF</a>, with 120K human preference annotations.'],
  ['Jan 2025', '<a href="https://mme-realworld.github.io/">MME-RealWorld</a> accepted by <strong>ICLR 2025</strong>.'],
  ['Jun 2024', 'Released <a href="https://github.com/yfzhang114/SliME">SliME</a> for high-resolution multimodal models.'],
  ['Mar 2024', 'Two papers on in-context learning and symbolic reasoning accepted by <strong>NAACL 2024</strong>.'],
  ['Oct 2023', '<a href="https://github.com/yfzhang114/OneNet">OneNet</a> accepted by <strong>NeurIPS 2023</strong>.'],
  ['May 2023', 'AdaNPC accepted by <strong>ICML 2023</strong>, DRM accepted by <strong>KDD 2023</strong>.'],
  ['Jan 2023', 'Environment Label Smoothing accepted by <strong>ICLR 2023</strong>.'],
  ['Apr 2022', 'DDG selected for an <strong>Oral</strong> presentation at <strong>CVPR 2022</strong>.'],
];
