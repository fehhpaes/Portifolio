import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'O nome é obrigatório.' },
        { status: 400 }
      );
    }

    if (!email || !email.trim() || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Um e-mail válido é obrigatório.' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'A mensagem não pode estar vazia.' },
        { status: 400 }
      );
    }

    // SMTP Configuration via Environment Variables (with fallback for testing/demo)
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_RECEIVER_EMAIL || user || 'contato@portfolio.local';

    // If credentials are provided, send actual email
    if (user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${user}>`,
        replyTo: email,
        to: recipient,
        subject: `[Portfólio] Nova Mensagem de ${name}`,
        text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 24px; border-radius: 8px;">
            <h2 style="color: #38bdf8; margin-top: 0;">Nova mensagem de contato recebida</h2>
            <hr style="border: 0; border-top: 1px solid #334155; margin: 16px 0;" />
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
            <p><strong>Mensagem:</strong></p>
            <div style="background-color: #1e293b; padding: 16px; border-radius: 6px; border-left: 4px solid #38bdf8; color: #e2e8f0; white-space: pre-wrap;">${message}</div>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">Enviado a partir do seu Portfólio Web.</p>
          </div>
        `,
      });
    } else {
      // In development or when SMTP is not yet configured in .env, log safely
      console.log('--- [Portfólio Contato - Simulação de Envio] ---');
      console.log(`De: ${name} <${email}>`);
      console.log(`Mensagem: ${message}`);
      console.log('--------------------------------------------------');
    }

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Erro na rota /api/contact:', error);
    return NextResponse.json(
      {
        error:
          'Ocorreu uma falha interna ao processar o envio do e-mail. Tente novamente mais tarde.',
      },
      { status: 500 }
    );
  }
}
