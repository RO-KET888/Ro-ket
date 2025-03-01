import Image from 'next/image'
import React from 'react'
import TermCond from '@/assets/images/icon/term&cond.svg'
import Popup from 'reactjs-popup';
import { describe } from 'node:test';

interface Scroll {
    setOnScroll: any
}

export default function Term(props: Scroll) {
    return (
        <>
            <Popup
                trigger={<button className="group inline-block h-10 w-10 md:h-11 md:w-11 p-2 rounded-full border-2 border-rocket text-rocket hover:border-white hover:text-white transition-all duration-300 ease-linear">
                    <Image
                        alt="Icon"
                        src={TermCond}
                        sizes="100%"
                        className="h-5 md:h-6 w-full group-hover:brightness-0 group-hover:invert transition-all duration-300 ease-linear"
                    />
                </button>}
                modal
                lockScroll
                onOpen={() => props.setOnScroll(true)}
                onClose={() => props.setOnScroll(false)}
            >
                <div className="w-[320px] md:w-[500px] pt-4 lg:w-[650px] bg-[#001616] border-2 border-rocket rounded-xl">
                    <h5 className='text-center font-medium text-base md:text-lg mb-1'>Terms and Conditions</h5>
                    <div className="h-[50vh] overflow-y-auto p-4">
                        <ol className='space-y-4'>
                            {
                                Features.map((item, index) => (
                                    <dl key={index} className='space-y-2'>
                                        {item.label ? <dt className={` ${!item.description ? ' text-base py-4' : 'text-sm'} font-[Pitviper]`}>{item.label}</dt> : ''}
                                        {item.description ? <dd className='text-xs leading-7'>{item.description}</dd> : ''}
                                    </dl>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </Popup>
        </>
    )
}




const Features = [
    {
        label: 'Prohibited Activities',
        description: 'Players shall not use bots, automated tools, or any form of artificial interference in Tournaments. Collusion, cheating, or exploiting any vulnerability is strictly prohibited. Any Player found violating these rules may face immediate suspension or termination of access, and any winnings associated with such activity may be forfeited at the Platform Operator’s discretion.'
    },
    {
        label: 'Risks and Disclaimers',
        description: null,
    },
    {
        label: 'Risk of Loss',
        description: 'Participation in Tournaments involves the risk of financial loss. Each Player assumes full responsibility for their own participation and decisions.',
    },
    {
        label: 'No Warranties',
        description: 'The Platform is provided "as is" without guarantees of uninterrupted service or error-free functionality. The Platform Operator is not liable for downtime, network issues, or third-party disruptions.',
    },
    {
        label: 'Third-Party Dependencies',
        description: 'Wallet providers, blockchain networks, and external pricing feeds are beyond the Platform Operator’s control. The Operator is not responsible for service failures or data inaccuracies from these third parties.',
    },
    {
        label: 'Governing Law and Jurisdiction',
        description: null,
    },
    {
        label: 'Costa Rica Law Applies',
        description: 'These Terms & Conditions shall be governed by and interpreted in accordance with the laws of Costa Rica, without regard to conflict-of-law principles.',
    },
    {
        label: 'Dispute Resolution',
        description: 'Any disputes arising from these Terms shall be settled in the competent courts of Costa Rica, unless otherwise required by local mandatory law.',
    },
    {
        label: 'Final Provisions',
        description: null,
    },
    {
        label: 'Entire Agreement',
        description: 'These Terms constitute the entire agreement between the Player and the Platform Operator, superseding any prior agreements or understandings.',
    },
    {
        label: 'No Waiver',
        description: 'Failure by the Platform Operator to enforce any provision shall not be considered a waiver of rights.',
    },
    {
        label: 'Severability',
        description: 'If any clause in this Agreement is found to be unenforceable, the remaining clauses shall remain in full effect.',
    },
    {
        label: 'Contact Information',
        description: 'For any questions regarding these Terms & Conditions, Players may contact the Platform Operator at info@ro-ket.io.',
    },
    {
        label: null,
        description: 'Effective Date: 21.02.2025',
    },
    {
        label: null,
        description: 'By using the Platform, Players confirm their understanding and acceptance of these Terms & Conditions.',
    },
]
