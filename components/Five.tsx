import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Five() {
    return (
        <section>
            <div className='space-y-7' >
                <h2 className='text-2xl lg:text-4xl text-center font-semibold'>FREQUENTLY ASKED QUESTIONS</h2>
                <Accordion type="single" collapsible className="w-full space-y-3">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-sm md:text-lg'>How does the game work?</AccordionTrigger>
                        <AccordionContent>
                        RO-KET is unique because the game uses BTC/USD price movements to determine when the rocket crashes. No random number generators—just real-time Bitcoin market action.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-sm md:text-lg'>Can I play for free and win real money?</AccordionTrigger>
                        <AccordionContent>
                        Yes! New players get 7 days of free play, and you earn an extra 7 days for each friend you refer. Play for free and win real prizes!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className='text-sm md:text-lg'>How do I withdraw my winnings?</AccordionTrigger>
                        <AccordionContent>
                        Withdrawals go through TONConnect directly to your Telegram Wallet or TON Keeper.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}