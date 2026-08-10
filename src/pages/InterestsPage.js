import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  BrainCircuit,
  Network,
  Zap,
  TrendingUp,
} from 'lucide-react';

const INTERESTS = [
  {
    icon: Code2,
    title: 'Software Development',
    text: 'My code is not broken; it just has surprise features.',
  },
  {
    icon: Cpu,
    title: 'VLSI Systems',
    text: 'Digital design, computer architecture, and hardware you can hold.',
  },
  {
    icon: BrainCircuit,
    title: 'AI / ML',
    text: 'Models, agents, and making intelligent systems genuinely useful.',
  },
  {
    icon: Network,
    title: 'Distributed Systems',
    text: 'Getting many moving parts to behave like one reliable system.',
  },
  {
    icon: Zap,
    title: 'High-Performance Computing',
    text: 'I know how to make my code run fast.',
  },
  {
    icon: TrendingUp,
    title: 'Quant Finance',
    text: 'Where math, markets, and code meet.',
  },
];

const InterestsPage = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="interests-grid">
          {INTERESTS.map((interest, i) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.title}
                className="interest-card glass-panel"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -6 }}
              >
                <div className="interest-icon">
                  <Icon size={26} />
                </div>
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-text">{interest.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterestsPage;
