/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import React from 'react';

const Redacted = ({ children }: { children: React.ReactNode }) => (
  <span 
    className="bg-charcoal/90 text-transparent hover:bg-transparent hover:text-charcoal transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] select-none hover:select-auto cursor-crosshair rounded-[2px] px-[2px]"
    title="Decrypt"
  >
    {children}
  </span>
);

export default function App() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-ambient text-charcoal font-sans relative overflow-x-hidden selection:bg-charcoal/10">
      <div className="noise-overlay" />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10"
      >
        {/* Header Section */}
        <motion.header variants={item} className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-charcoal/10 pb-12 gap-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-medium tracking-tight text-charcoal leading-[1.05]">
              The Blue Whale<br/>Phenomenon
            </h1>
            <p className="font-sans text-sm md:text-base mt-8 text-graphite leading-relaxed">
              Digital Anthropology / Internet History Investigative Dossier
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 md:pb-2">
            <span className="font-mono text-[9px] text-graphite uppercase tracking-[0.2em]">Ref_2024_BW_Analysis</span>
            <span className="font-mono text-[9px] text-graphite uppercase tracking-[0.2em]">Classification: Academic / Non-Sensational</span>
            <span className="font-mono text-[9px] text-charcoal/40 uppercase tracking-[0.15em] mt-2 group flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blood/60 animate-pulse" /> Document Declassified — 2024</span>
            <span className="font-mono text-[9px] text-charcoal/40 uppercase tracking-[0.15em]">Verification Index: 94%</span>
          </div>
        </motion.header>

        {/* Methodology */}
        <motion.div variants={item} className="mb-24 lg:mb-32 max-w-2xl">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal mb-6 flex items-center gap-3">
            <span className="w-4 h-px bg-charcoal/20" /> Methodology
          </h2>
          <p className="text-[15px] font-sans text-graphite leading-relaxed max-w-[65ch]">
            This dossier synthesizes archived reporting, psychological analysis, platform history, legal documentation, and sociological interpretation. The objective is analytical reconstruction rather than sensational retelling. Interaction with restricted archival elements may be required.
          </p>
        </motion.div>

        {/* 01. Cultural Environment & Folklore Classification */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-16 lg:gap-x-24 mt-16 border-t border-charcoal/10 pt-24 lg:pt-32">
          <div className="md:col-span-4 flex flex-col justify-start">
            <div className="border-t border-charcoal/20 pt-4 mb-8">
               <h3 className="font-mono text-[9px] text-charcoal uppercase tracking-[0.2em] mb-6">Digital Folklore Classification</h3>
               <ul className="space-y-4 font-mono text-[10px] text-graphite">
                  <li className="flex justify-between border-b border-charcoal/5 pb-2"><span>Category:</span> <span className="text-charcoal/80">Participatory Mythology</span></li>
                  <li className="flex justify-between border-b border-charcoal/5 pb-2"><span>Authorship:</span> <span className="text-charcoal/80">Decentralized</span></li>
                  <li className="flex justify-between border-b border-charcoal/5 pb-2"><span>Structure:</span> <span className="text-charcoal/80">Hybrid Fact-Fiction</span></li>
                  <li className="flex justify-between border-b border-charcoal/5 pb-2"><span>Dependence:</span> <span className="text-charcoal/80">Media Amplification</span></li>
                  <li className="flex justify-between border-b border-charcoal/5 pb-2"><span>Primary Platform:</span> <span className="text-charcoal/80">VKontakte</span></li>
                  <li className="flex justify-between border-b border-charcoal/5 pb-2"><span>Myth Density:</span> <span className="text-charcoal/80">High</span></li>
               </ul>
            </div>
          </div>

          <div className="md:col-span-8 relative">
            <div className="absolute -top-12 -left-8 text-[140px] font-serif italic text-charcoal/[0.03] -z-10 select-none tracking-tighter pointer-events-none">
              01
            </div>
            <h2 className="font-serif italic text-2xl text-charcoal mb-8 leading-[1.1]">Cultural Environment</h2>
            <div className="space-y-6 text-[15px] text-graphite leading-[1.8] font-sans max-w-[65ch]">
              <p>
                The Blue Whale phenomenon emerged during a <Redacted>transitional phase</Redacted> of internet culture characterized by weak moderation systems, rapid smartphone adoption among adolescents, and algorithmically amplified fear narratives. <span className="text-[10px] text-charcoal/40 font-mono tracking-wider ml-1 whitespace-nowrap">[REF — NG-2016]</span>
              </p>
              <p>
                Platforms such as VKontakte, YouTube, Tumblr, and anonymous imageboards enabled the rapid spread of depressive iconography, self-harm aesthetics, and mythologized "hidden internet" narratives.
              </p>
              <div className="pl-6 border-l border-charcoal/10 my-8 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-charcoal mb-3">Coinciding Viral Factors (2014–2017)</p>
                <ul className="space-y-2 text-xs font-serif italic text-graphite/80 list-disc list-inside">
                  <li>Early creepypasta proliferation</li>
                  <li>Deep web moral panic culture</li>
                  <li>Viral challenge ecosystems</li>
                  <li>Increased adolescent social media dependency</li>
                </ul>
              </div>
              <p>
                Researchers later argued that the surrounding panic ecosystem amplified the morphology far beyond the scale of the original <Redacted>localized groups</Redacted>. <span className="text-[10px] text-charcoal/40 font-mono tracking-wider ml-1 whitespace-nowrap">[ARCHIVE / PARTIAL]</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* 02 & 03: Timeline and Contagion */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-16 lg:gap-x-24 mt-24 lg:mt-32 border-t border-charcoal/10 pt-24 lg:pt-32">
          
          {/* Left Col: Timeline */}
          <div className="relative md:col-span-5">
            <div className="absolute -top-12 -left-8 text-[140px] font-serif italic text-charcoal/[0.03] -z-10 select-none tracking-tighter pointer-events-none">
              02
            </div>
            <h2 className="font-serif italic text-2xl text-charcoal mb-12">Spread Timeline</h2>
            
            <div className="border-l border-charcoal/10 ml-2 pl-8 space-y-14">
              {[
                { year: "2013", title: "Origin", desc: "Initial formation of 'F57' death groups on VKontakte (VK). Social networking for niche edge-cultures.", ref: "[ARC-01]" },
                { year: "2015", title: "Catalyst", desc: "Suicide of Rina Palenkova. Images become viral iconography for depressive subcultures.", ref: "[VK-IMG-EX]" },
                { year: "2016", title: "Inflection", desc: "Novaya Gazeta publishes unverified report linking 130 suicides to 'groups.' Panic begins in CIS region.", ref: "[NG-2016-04]" },
                { year: "2017", title: "Global Hysteria", desc: "Panic reaches UK, USA, India. Police departments issue warnings based on secondary social media reports.", ref: "[INT-POL-LOG]" }
              ].map((event, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[37px] top-1.5 w-1.5 h-1.5 rounded-full bg-charcoal/20 group-hover:bg-charcoal transition-colors duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <span className="block font-mono text-[9px] text-graphite uppercase tracking-[0.15em] mb-3">{event.year} — {event.title} <span className="ml-2 text-charcoal/30">{event.ref}</span></span>
                  <p className="text-[14px] font-sans text-graphite leading-[1.8] max-w-[60ch]">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Contagion Model */}
          <div className="relative md:col-span-7">
            <div className="absolute -top-12 -left-8 text-[140px] font-serif italic text-charcoal/[0.03] -z-10 select-none tracking-tighter pointer-events-none">
              03
            </div>
            <h2 className="font-serif italic text-2xl text-charcoal mb-12">Information Contagion Sequence</h2>
            
            <div className="space-y-10">
              {[
                { stage: "01", title: "Localized Online Groups", desc: "Small communities form around depressive symbolism and edge-culture identity." },
                { stage: "02", title: "Media Amplification", desc: "News agencies publish emotionally charged reports with incomplete verification." },
                { stage: "03", title: "Viral Replication", desc: "Users repost screenshots, warnings, challenge lists, and fabricated curator messages." },
                { stage: "04", title: "Institutional Panic", desc: "Schools, police departments, and parents issue warnings based on secondary reporting." },
                { stage: "05", title: "Myth Solidification", desc: "The phenomenon evolves from isolated incidents into a globally recognized digital folklore structure." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 group cursor-default border-b border-charcoal/5 pb-6 last:border-0">
                  <div className="font-mono text-[10px] text-charcoal/30 pt-1 tracking-[0.2em] transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)]">{step.stage}</div>
                  <div>
                    <h4 className="text-[13px] uppercase tracking-wider font-mono text-charcoal/80 mb-2">{step.title}</h4>
                    <p className="text-[14px] font-sans text-graphite leading-[1.8] max-w-[60ch] transition-colors duration-700 group-hover:text-charcoal/90">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 04 & 05: Verification, Psychology, Vulnerability */}
        <motion.div variants={item} className="mt-24 lg:mt-32 border-t border-charcoal/10 pt-24 lg:pt-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-16 lg:gap-x-24">
            
            <div className="md:col-span-6 relative">
               <div className="absolute -top-12 -left-8 text-[140px] font-serif italic text-charcoal/[0.03] -z-10 select-none tracking-tighter pointer-events-none">
                 04
               </div>
               <h2 className="font-serif italic text-2xl text-charcoal mb-12">Verification Analysis</h2>
               
               <div className="flex flex-col gap-12">
                 <div className="flex flex-col gap-8">
                   <h3 className="font-mono text-[9px] text-charcoal uppercase tracking-[0.2em] border-t border-charcoal/20 pt-4 flex justify-between items-center">
                     <span>Verified Facts</span>
                     <span className="text-green-800/40">CONFIRMED</span>
                   </h3>
                   <ul className="space-y-8">
                     {[
                       { title: "Curators Exist", desc: "Individuals did assume roles to assign tasks (isolation, sleep deprivation)." },
                       { title: "Specific Tasks", desc: "Tasks typically included self-harm or viewing disturbing content at specific times." },
                       { title: "Criminal Activity", desc: "Convictions secured in Russia for 'incitement to suicide'." }
                     ].map((fact, i) => (
                       <li key={i} className="group cursor-default">
                         <span className="block text-xs font-medium text-charcoal mb-2">{fact.title}</span>
                         <span className="block text-[14px] text-graphite leading-[1.8] max-w-[55ch] transition-colors duration-700 group-hover:text-charcoal/90">{fact.desc}</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div className="flex flex-col gap-8 relative mt-4">
                   <div className="absolute -inset-8 bg-blood-muted/50 -z-10 rounded-sm opacity-0 md:opacity-100 mix-blend-multiply" />
                   <h3 className="font-mono text-[9px] text-blood uppercase tracking-[0.2em] border-t border-blood/20 pt-4 flex justify-between items-center">
                     <span>Media Hysteria</span>
                     <span className="text-blood/40">UNVERIFIED</span>
                   </h3>
                   <ul className="space-y-8">
                     {[
                       { title: "130 Deaths Claim", desc: "Statistical correlation never proven; most cases had prior existing mental health issues." },
                       { title: "Coercive Threats", desc: "Claims that 'curators' could find home addresses via IP were largely empty bluffs." },
                       { title: "Game Mechanics", desc: "Portrayed as a structured app/game; actually involved informal chat groups." }
                     ].map((myth, i) => (
                       <li key={i} className="group cursor-default">
                         <span className="block text-xs font-medium text-blood/80 mb-2">{myth.title}</span>
                         <span className="block text-[14px] text-graphite leading-[1.8] max-w-[55ch] transition-colors duration-700 group-hover:text-charcoal/90">{myth.desc}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </div>

            <div className="md:col-span-6 relative flex flex-col gap-16">
               <div className="absolute -top-12 -left-8 text-[140px] font-serif italic text-charcoal/[0.03] -z-10 select-none tracking-tighter pointer-events-none">
                 05
               </div>
               
               <div>
                 <h2 className="font-serif italic text-2xl text-charcoal mb-10">Psychological Mechanisms</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                   {[
                     { title: "Sleep Deprivation", desc: "Disturbs circadian rhythms to weaken cognitive defenses and increase emotional vulnerability." },
                     { title: "Sunk Cost Fallacy", desc: "Escalation from minor tasks to harmful ones creates a sense of irreversible commitment." },
                     { title: "Social Mimicry", desc: "Adolescent search for identity within 'exclusive' but destructive peer structures." }
                   ].map((mech, i) => (
                     <div key={i} className="group cursor-default">
                       <h4 className="font-mono text-[9px] uppercase tracking-[0.15em] text-charcoal mb-4 relative inline-block">
                         {mech.title}
                         <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-charcoal/30 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                       </h4>
                       <p className="text-[14px] font-sans text-graphite leading-[1.8] max-w-[55ch] group-hover:text-charcoal/90 transition-colors duration-700">
                         {mech.desc}
                       </p>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="mt-4">
                 <h2 className="font-serif italic text-xl text-charcoal mb-8 border-b border-charcoal/10 pb-4">Sociological Vulnerabilities</h2>
                 <ul className="grid grid-cols-2 gap-x-6 gap-y-6">
                   {[
                     "Adolescent Identity Formation",
                     "Online Isolation",
                     "Parasocial Dependency",
                     "Depression Communities",
                     "Algorithmic Reinforcement",
                     "Exclusivity Psychology"
                   ].map((factor, i) => (
                     <li key={i} className="font-mono text-[9px] uppercase tracking-[0.1em] text-graphite group flex items-center gap-3">
                        <span className="w-1.5 h-px bg-charcoal/20 group-hover:bg-charcoal/50 transition-colors" />
                        {factor}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

          </div>
        </motion.div>

        {/* 06. Technical & Interface */}
        <motion.div variants={item} className="mt-24 lg:mt-32 relative border-t border-charcoal/10 pt-24 lg:pt-32">
           <div className="absolute top-[48px] lg:top-[80px] left-0 text-[140px] font-serif italic text-charcoal/[0.03] -z-10 select-none tracking-tighter pointer-events-none">
             06
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-16 lg:gap-x-24 items-center pl-8 md:pl-0">
             <div className="md:col-span-5 relative z-10">
                <h2 className="font-serif italic text-2xl text-charcoal mb-8">Interface Mythology</h2>
                <div className="space-y-6 text-[15px] font-sans text-graphite leading-[1.8] max-w-[65ch]">
                  <p>
                    Public imagination reconstructed the phenomenon as a hidden application with centralized control architecture despite evidence suggesting decentralized <Redacted>human-mediated</Redacted> interaction.
                  </p>
                  <p>
                    This reflects a broader cultural tendency to anthropomorphize opaque digital systems into singular technological entities, assigning software the characteristics of an omnipresent threat.
                  </p>
                </div>
             </div>

             <div className="md:col-span-7">
                <div className="group border border-charcoal/5 bg-white/30 p-10 hover:bg-white/50 transition-all duration-500 rounded-sm relative overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-charcoal/10 to-transparent" />
                  <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-charcoal/10 to-transparent" />
                  
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-graphite">Technical Audit</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal mt-1.5">Object: Mobile Application</p>
                    </div>
                    <div className="px-2 py-0.5 border border-blood/20 text-blood font-mono text-[9px] uppercase tracking-[0.2em] rounded-sm">Non-Existent</div>
                  </div>
                  
                  <p className="text-[16px] leading-relaxed text-charcoal font-serif italic mb-6 shadow-sm">
                    "No 'Blue Whale APK' ever functioned as a standalone game."
                  </p>
                  <p className="text-[14px] leading-[1.8] text-graphite font-sans max-w-[55ch]">
                    Extensive cybersecurity sweeps confirm interaction was 100% human-mediated via social platforms (VK, WhatsApp, Instagram). App store removals were largely precautionary reactions to the meta-narrative.
                  </p>
                  <div className="mt-8 pt-4 border-t border-charcoal/5 font-mono text-[8.5px] text-graphite/60 uppercase tracking-[0.2em] flex items-center gap-3">
                     <span className="bg-charcoal/10 px-1 py-0.5 text-charcoal rounded-sm">ARTIFACT 44B</span> Source Reliability: Low (For App Claims) / High (For Network Traffic)
                  </div>
                </div>
             </div>
           </div>
        </motion.div>

        {/* 07 & 08. Comparative Panics, Legal Precedents, Search Queries */}
        <motion.div variants={item} className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-x-12 lg:gap-x-16 border-t border-charcoal/10 pt-24 lg:pt-32">
          
          <div className="md:col-span-4 relative">
             <div className="absolute -top-12 -left-8 text-[140px] font-serif italic text-charcoal/[0.03] -z-10 select-none tracking-tighter pointer-events-none">
               07
             </div>
             <h2 className="font-serif italic text-2xl text-charcoal mb-10">Comparative Panics</h2>
             <div className="space-y-6 text-[14px] text-graphite leading-[1.8] max-w-[55ch]">
               <p className="mb-6 italic font-serif">Structural similarities in media amplification parallel historic outrages:</p>
               <ul className="space-y-5">
                 {[
                   "Satanic Panic (1980s)",
                   "Slender Man Panic (2014)",
                   "Momo Challenge (2018)",
                   "Violent Video Game Scares",
                   "TikTok Challenge Scares"
                 ].map((panic, i) => (
                    <li key={i} className="flex items-center gap-4 group cursor-default">
                      <span className="font-mono text-[10px] text-charcoal/30 group-hover:text-charcoal/60 transition-colors duration-700">0{i+1}</span>
                      <span className="text-charcoal/80 group-hover:text-charcoal transition-colors duration-700 transform translate-x-0 group-hover:translate-x-1 ease-[cubic-bezier(0.16,1,0.3,1)] inline-block">{panic}</span>
                    </li>
                 ))}
               </ul>
             </div>
          </div>

          <div className="md:col-span-4 relative border-l border-charcoal/5 pl-8 md:pl-12">
             <div className="absolute -top-12 left-0 text-[140px] font-serif italic text-charcoal/[0.03] -z-10 select-none tracking-tighter pointer-events-none">
               08
             </div>
             <h2 className="font-serif italic text-2xl text-charcoal mb-10">Legal Precedents</h2>
             <div className="space-y-12">
              <div className="relative pl-6 group">
                 <div className="absolute left-0 top-1 bottom-1 w-px bg-charcoal/10 group-hover:bg-charcoal/40 transition-colors duration-[1s]" />
                 <p className="text-xs font-medium text-charcoal mb-2">Philipp Budeikin (2016) <span className="ml-2 font-mono text-[9px] text-charcoal/30">[COURT-DOC-A]</span></p>
                 <p className="text-[14px] font-sans text-graphite leading-[1.8] max-w-[50ch] group-hover:text-charcoal/90 transition-colors duration-700">Pleaded guilty to inciting suicide of at least 16 teenagers. Sentenced to 3 years. Claimed victims were "biological waste."</p>
               </div>
               <div className="relative pl-6 group mt-8">
                 <div className="absolute left-0 top-1 bottom-1 w-px bg-charcoal/10 group-hover:bg-charcoal/40 transition-colors duration-[1s]" />
                 <p className="text-xs font-medium text-charcoal mb-2">Ilya Sidorov (2017) <span className="ml-2 font-mono text-[9px] text-charcoal/30">[COURT-DOC-B]</span></p>
                 <p className="text-[14px] font-sans text-graphite leading-[1.8] max-w-[50ch] group-hover:text-charcoal/90 transition-colors duration-700">Postal worker admitted to creating a "death group" and encouraging self-harm.</p>
               </div>
             </div>
          </div>

          <div className="md:col-span-4 relative flex flex-col justify-between border-l border-charcoal/5 pl-8 md:pl-12">
             <div>
               <h2 className="font-serif italic text-xl text-charcoal mb-8 border-b border-charcoal/10 pb-4">2017 Search Data</h2>
               <ul className="space-y-4 font-mono text-[9px] uppercase tracking-wider text-charcoal">
                 {[
                   `"blue whale real or fake"`,
                   `"can blue whale hack phone"`,
                   `"blue whale app download"`,
                   `"4:20 challenge meaning"`,
                   `"curator meaning"`
                 ].map((query, i) => (
                    <li key={i} className="px-4 py-3 bg-white/20 border border-charcoal/5 rounded-sm hover:bg-white/40 transition-colors duration-[1s] cursor-crosshair">
                      <span className="text-charcoal/40 mr-2">QUERY_LOG_{i+1}:</span> {query}
                    </li>
                 ))}
               </ul>
             </div>
          </div>

        </motion.div>

        {/* Conclusion */}
        <motion.div variants={item} className="mt-32 lg:mt-40 max-w-3xl mx-auto text-center relative pt-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-charcoal/20 to-transparent" />
          
          <h2 className="font-serif italic text-3xl text-charcoal mb-10">Conclusion</h2>
          <div className="space-y-8 font-serif text-[18px] text-charcoal/80 leading-[2] max-w-[65ch] mx-auto">
            <p>
              The Blue Whale phenomenon survived not because of technological sophistication, but because it emerged at the intersection of adolescent vulnerability, early social media acceleration, and fear-driven news amplification.
            </p>
            <p>
              Its persistence within internet memory demonstrates how digital folklore evolves through repetition, uncertainty, and institutional panic.
            </p>
            <p className="text-charcoal/90 font-medium font-sans text-[13px] md:text-[15px] pt-8 uppercase tracking-widest border-t border-charcoal/10 mt-12 mx-auto inline-block">
              The event represents one of the earliest globally recognized examples of <Redacted>internet-age</Redacted> psychological contagion.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer variants={item} className="mt-24 lg:mt-32 pt-10 pb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-charcoal/20 via-charcoal/5 to-transparent" />
          
          <div className="flex flex-col gap-4">
            <span className="font-serif italic text-charcoal/80 text-[17px]">
              Do not romanticize. View through critical structuralism.
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[9px] font-mono uppercase tracking-[0.2em] text-graphite">
              <span>Dossier Verified 2024</span>
              <span className="hidden sm:block w-0.5 h-0.5 rounded-full bg-graphite/40" />
              <span>End of File</span>
              <span className="hidden sm:block w-0.5 h-0.5 rounded-full bg-graphite/40" />
              <span>
                Architecture & Design by <a href="https://github.com/sxwik" target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-blood transition-colors underline decoration-charcoal/30 underline-offset-4">@sxwik</a>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-charcoal/[0.03] px-5 py-3 rounded-sm border border-charcoal/5">
            <div className="relative flex items-center justify-center w-2 h-2">
              <div className="absolute w-full h-full rounded-full bg-blood opacity-20 animate-ping duration-[3s]" />
              <div className="w-1.5 h-1.5 rounded-full bg-blood" />
            </div>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-charcoal">Archive Action: Sealed</span>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}