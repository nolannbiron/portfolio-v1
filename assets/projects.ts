import { ProjectProps } from "../components/Project";

interface ProjectsList{
    featured: Array<ProjectProps>,
    all: Array<ProjectProps>
}

export const projectsList: ProjectsList = {
    featured: [
        {
            title: 'DividendTracer',
            description: 'A dApp to track every rewards collected by holding a BEP20 token.',
            keywords: ['react', 'web3', 'TypeScript', 'bscscanApi', 'ethers.js', 'styled-components'],
            website: "https://dividendtracer.com",
            github: 'https://github.com/nolannbiron/dividendtracer'
        },
        {
            title: 'PonySwap',
            description: '',
            keywords: ['react', 'web3', 'TypeScript', 'bscscanApi', 'ethers.js', 'styled-components'],
            website: "https://dividendtracer.com",
            github: 'https://github.com/nolannbiron/dividendtracer'
        }
    ],
    all: [
        {
            title: 'DividendTracer',
            description: 'A dApp to track every rewards collected by holding a BEP20 token.',
            keywords: ['react', 'web3', 'TypeScript', 'bscscanApi', 'ethers.js', 'styled-components', 'react', 'web3', 'TypeScript', 'bscscanApi', 'ethers.js', 'styled-components'],
            website: "https://dividendtracer.com",
            github: 'https://github.com/nolannbiron/dividendtracer'
        },
        {
            title: 'PonySwap',
            description: 'A dApp to track every rewards collected by holding a BEP20 token.',
            keywords: ['react', 'web3', 'TypeScript', 'bscscanApi', 'ethers.js', 'styled-components'],
            website: "https://dividendtracer.com",
            github: 'https://github.com/nolannbiron/dividendtracer'
        }
    ]
}