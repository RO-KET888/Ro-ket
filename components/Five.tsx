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
                        <AccordionTrigger className='text-sm md:text-lg'>how to play?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-sm md:text-lg'>How to cash out?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className='text-sm md:text-lg'>Tournaments?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}