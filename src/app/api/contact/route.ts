import {NextResponse} from 'next/server'

interface ContactForm {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data: ContactForm = await request.json()

    if (!data.email || !data.name || !data.message) {
      return NextResponse.json(
        {error: 'Missing required fields'},
        {status: 400}
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        {error: 'Invalid email format'},
        {status: 400}
      )
    }

    // TODO: Add actual email sending logic here

    return NextResponse.json(
      {message: 'Message sent successfully'},
      {status: 200}
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to process request';
    return NextResponse.json(
      {
        error: 'Failed to process request',
        detail: errorMessage
      },

      {status: 500}
    )
  }
}