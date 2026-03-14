import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, subject, message } = body

        // Validate the data
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Proxy to FormSubmit.co
        const response = await fetch("https://formsubmit.co/ajax/support@morebitsolutions.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                subject: `[Bespoke Inquiry] ${subject}`,
                message,
                _template: "table" // Premium looking table template from FormSubmit
            })
        })

        if (!response.ok) {
            throw new Error('FormSubmit error')
        }

        const result = await response.json()
        return NextResponse.json(result)

    } catch (error) {
        console.error('Error processing contact form:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
