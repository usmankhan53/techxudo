import React, { useState } from 'react';
import styles from '../css/Technologies.module.css';

// Icons for the different technologies
import { FaAndroid, FaApple, FaReact, FaAngular, FaNodeJs, FaWordpress, FaShopify, FaMagento, FaHtml5, FaCss3, FaJsSquare, FaPython, FaJava } from 'react-icons/fa';
import { SiFigma, SiAdobe, SiSass, SiTypescript, SiBootstrap, SiTailwindcss, SiNextdotjs, SiNuxtdotjs, SiGraphql, SiDjango, SiRuby, SiPhp, SiKotlin, SiReactrouter, SiFlutter, SiEthereum, SiSolidity, SiWeb3Dotjs, SiIpfs } from 'react-icons/si';

// Color mapping for icons
const iconColors = {
  FaAndroid: '#3DDC84', // Android Green
  FaApple: '#A2AAAD', // Apple Gray
  SiKotlin: '#F18E2B', // Kotlin Orange
  FaReact: '#61DAFB', // React Blue
  SiFlutter: '#02569B', // Flutter Blue
  FaHtml5: '#E34F26', // HTML5 Red
  FaCss3: '#1572B6', // CSS3 Blue
  FaJsSquare: '#F7DF1E', // JavaScript Yellow
  FaAngular: '#DD0031', // Angular Red
  FaNodeJs: '#8CC84B', // Node.js Green
  SiTypescript: '#007ACC', // TypeScript Blue
  SiSass: '#CC6699', // Sass Pink
  SiBootstrap: '#563D7C', // Bootstrap Purple
  SiTailwindcss: '#38B2AC', // Tailwind CSS Teal
  SiNextdotjs: '#000000', // Next.js Black
  SiNuxtdotjs: '#00DC82', // Nuxt.js Green
  SiGraphql: '#E10098', // GraphQL Pink
  SiDjango: '#092E20', // Django Green
  SiRuby: '#CC342D', // Ruby Red
  SiPhp: '#787CB5', // PHP Purple
  SiFigma: '#F24E1E', // Figma Orange
  SiAdobe: '#FF61F6', // Adobe Pink
  FaJava: '#F7DF1E', // Java Yellow
  FaPython: '#306998', // Python Blue
  FaShopify: '#7AB55C', // Shopify Green
  FaMagento: '#F45D22', // Magento Orange
  FaWordpress: '#21759B', // WordPress Blue
  SiEthereum: '#3C3C3D', // Ethereum Gray
  SiSolidity: '#3C3C3D', // Solidity Gray
  SiWeb3Dotjs: '#F16822', // Web3.js Orange
  SiIpfs: '#65C2CB' // IPFS Cyan
};

function Technologies() {
  const [activeTab, setActiveTab] = useState('web'); // Default to 'web' section

  const tabs = {
    mobile: {
      title: 'Mobile',
      icons: [
        { icon: <FaAndroid key="android" />, color: iconColors.FaAndroid },
        { icon: <FaApple key="apple" />, color: iconColors.FaApple },
        { icon: <SiKotlin key="kotlin" />, color: iconColors.SiKotlin },
        { icon: <FaReact key="react-native" />, color: iconColors.FaReact },
        { icon: <SiFlutter key="flutter" />, color: iconColors.SiFlutter }
      ]
    },
    web: {
      title: 'Web Development',
      icons: [
        { icon: <FaHtml5 key="html5" />, color: iconColors.FaHtml5 },
        { icon: <FaCss3 key="css3" />, color: iconColors.FaCss3 },
        { icon: <FaJsSquare key="javascript" />, color: iconColors.FaJsSquare },
        { icon: <FaReact key="react" />, color: iconColors.FaReact },
        { icon: <FaAngular key="angular" />, color: iconColors.FaAngular },
        { icon: <FaNodeJs key="nodejs" />, color: iconColors.FaNodeJs },
        { icon: <SiTypescript key="typescript" />, color: iconColors.SiTypescript },
        { icon: <SiSass key="sass" />, color: iconColors.SiSass },
        { icon: <SiBootstrap key="bootstrap" />, color: iconColors.SiBootstrap },
        { icon: <SiTailwindcss key="tailwind" />, color: iconColors.SiTailwindcss },
        { icon: <SiNextdotjs key="nextjs" />, color: iconColors.SiNextdotjs },
        { icon: <SiNuxtdotjs key="nuxtjs" />, color: iconColors.SiNuxtdotjs },
        { icon: <SiGraphql key="graphql" />, color: iconColors.SiGraphql },
        { icon: <FaPython key="python" />, color: iconColors.FaPython },
        { icon: <SiDjango key="django" />, color: iconColors.SiDjango },
        { icon: <SiRuby key="ruby" />, color: iconColors.SiRuby },
        { icon: <SiPhp key="php" />, color: iconColors.SiPhp },
        { icon: <SiReactrouter key="react-router" />, color: iconColors.SiReactrouter }
      ]
    },
    uiux: {
      title: 'UI/UX Design',
      icons: [
        { icon: <SiFigma key="figma" />, color: iconColors.SiFigma },
        { icon: <SiAdobe key="adobe" />, color: iconColors.SiAdobe },
      ]
    },
    ecommerce: {
      title: 'E-commerce',
      icons: [
        { icon: <FaShopify key="shopify" />, color: iconColors.FaShopify },
        { icon: <FaMagento key="magento" />, color: iconColors.FaMagento },
        { icon: <FaWordpress key="wordpress" />, color: iconColors.FaWordpress }
      ]
    },
    web3: {
      title: 'Web3',
      icons: [
        { icon: <SiEthereum key="ethereum" />, color: iconColors.SiEthereum },
        { icon: <SiSolidity key="solidity" />, color: iconColors.SiSolidity },
        { icon: <SiWeb3Dotjs key="web3js" />, color: iconColors.SiWeb3Dotjs },
        { icon: <SiIpfs key="ipfs" />, color: iconColors.SiIpfs }
      ]
    }
  };

  return (
    <section className={styles.technologies}>
      <h2 className={styles.heading}>Tools and Technologies</h2>
      <div className={styles.tabs}>
        {Object.keys(tabs).map(tab => (
          <div
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tabs[tab].title}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {tabs[activeTab].icons.map((item, index) => (
          <div key={index} className={styles.icon} style={{ color: item.color }}>
            {item.icon}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
