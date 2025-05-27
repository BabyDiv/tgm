// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     console.log('SMTP_USER:', process.env.SMTP_USER);
//     console.log('SMTP_PASS:', process.env.SMTP_PASS ? '***' : 'нет пароля');

//     const transporter = nodemailer.createTransport({
//       host: 'mail.cgmexport.kz',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     await transporter.sendMail({
//       from: `"${body.firstName} ${body.lastName}" <${body.email}>`,
//       to: 'info@cgmexport.kz',
//       subject: 'Новое сообщение с сайта',
//       text: `
//         Имя: ${body.firstName} ${body.lastName}
//         Email: ${body.email}
//         Телефон: ${body.phone}
//         Сообщение: ${body.message}
//       `,
//     });

//     return NextResponse.json({ success: true, message: 'Email sent' });
//   } catch (error) {
//     console.error('Ошибка при отправке письма:', error);
//     return NextResponse.json({ success: false, message: error.message }, { status: 500 });
//   }
// }