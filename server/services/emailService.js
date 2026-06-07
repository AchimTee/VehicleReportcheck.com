import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_H9rJcvSu_94gkaoK37LsAoPFbgXUEyYAW';
const resend = new Resend(RESEND_API_KEY);

const DEFAULT_FROM = process.env.SMTP_FROM || 'Vehicle Report Check Support <support@achtrex.com>';
const LOGO_URL = 'https://www.vehiclereportcheck.com/logo.png'; // Make sure this URL is publicly accessible

const getBaseStyle = () => `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body { 
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
            background-color: #f4f7f6; 
            margin: 0; 
            padding: 0; 
            -webkit-font-smoothing: antialiased;
        }
        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #f4f7f6;
            padding: 40px 0;
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #ffffff; 
            border-radius: 16px; 
            overflow: hidden; 
            box-shadow: 0 10px 25px rgba(0,0,0,0.05); 
        }
        .header { 
            background: #ffffff; 
            padding: 30px 20px; 
            text-align: center; 
            border-bottom: 1px solid #f1f5f9;
        }
        .header img {
            max-width: 180px;
            height: auto;
        }
        .hero {
            background: linear-gradient(135deg, #00A3FF 0%, #B300FF 100%);
            padding: 40px 30px;
            text-align: center;
            color: #ffffff;
        }
        .hero h1 { 
            margin: 0; 
            font-size: 28px; 
            font-weight: 700;
            letter-spacing: -0.5px; 
            color: #ffffff;
        }
        .content { 
            padding: 40px 30px; 
            color: #334155; 
            line-height: 1.6; 
            font-size: 16px;
        }
        .content h2 { 
            color: #0f172a; 
            margin-top: 0; 
            font-size: 22px;
            font-weight: 600;
        }
        .content p {
            margin-bottom: 20px;
            color: #475569;
        }
        .button-container {
            text-align: center;
            margin: 35px 0;
        }
        .button { 
            display: inline-block; 
            padding: 14px 32px; 
            background: linear-gradient(135deg, #00A3FF 0%, #B300FF 100%); 
            color: #ffffff !important; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: 600; 
            font-size: 16px;
            box-shadow: 0 4px 12px rgba(0, 163, 255, 0.3);
            transition: transform 0.2s ease;
        }
        .data-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
        }
        .data-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            border-bottom: 1px dashed #cbd5e1;
            padding-bottom: 10px;
        }
        .data-row:last-child {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
        }
        .data-label {
            font-weight: 600;
            color: #64748b;
        }
        .data-value {
            font-weight: 600;
            color: #0f172a;
        }
        .footer { 
            padding: 30px; 
            text-align: center; 
            color: #64748b; 
            font-size: 13px; 
            background: #f8fafc; 
            border-top: 1px solid #f1f5f9;
        }
        .footer a {
            color: #00A3FF;
            text-decoration: none;
        }
    </style>
`;

const getEmailTemplate = (heroTitle, bodyContent) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${getBaseStyle()}
    </head>
    <body>
        <div class="wrapper">
            <div class="container">
                <div class="header">
                    <a href="https://www.vehiclereportcheck.com">
                        <img src="${LOGO_URL}" alt="Vehicle Report Check Logo" width="180">
                    </a>
                </div>
                ${heroTitle ? `
                <div class="hero">
                    <h1>${heroTitle}</h1>
                </div>
                ` : ''}
                <div class="content">
                    ${bodyContent}
                </div>
                <div class="footer">
                    <p>You received this email because you are a registered user of Vehicle Report Check.</p>
                    <p>&copy; ${new Date().getFullYear()} Achtrex LLC. All rights reserved.</p>
                    <p>
                        <a href="https://www.vehiclereportcheck.com">Visit Website</a> | 
                        <a href="https://www.vehiclereportcheck.com/login">Login to Dashboard</a>
                    </p>
                </div>
            </div>
        </div>
    </body>
    </html>
`;

const sendWelcomeEmail = async (email, name) => {
    const bodyContent = `
        <h2>Hi ${name},</h2>
        <p>Welcome to <strong>Vehicle Report Check</strong>! We are thrilled to have you on board.</p>
        <p>Buying a car is a major investment. With your new account, you can quickly run comprehensive vehicle history reports, check VINs, and uncover hidden red flags like salvage titles, odometer rollbacks, and auction records.</p>
        <p>Make sure you're getting the best deal on your next car by knowing its true history.</p>
        <div class="button-container">
            <a href="https://www.vehiclereportcheck.com/login" class="button">Log in to your account</a>
        </div>
        <p>If you have any questions, our support team is always here to help.</p>
        <p>Best regards,<br>The Vehicle Report Check Team</p>
    `;

    try {
        const { data, error } = await resend.emails.send({
            from: DEFAULT_FROM,
            to: email,
            subject: 'Welcome to Vehicle Report Check! 🚗',
            html: getEmailTemplate('Welcome to Vehicle Report Check', bodyContent)
        });

        if (error) console.error('Resend error on welcome email:', error);
    } catch (err) {
        console.error('Email error:', err);
    }
};

const sendPaymentReceipt = async (email, name, amount, packageName) => {
    const bodyContent = `
        <h2>Hi ${name || 'Valued Customer'},</h2>
        <p>Thank you for your purchase. Your payment was successfully processed and your credits have been added to your account.</p>
        
        <div class="data-box">
            <div class="data-row">
                <span class="data-label">Package</span>
                <span class="data-value">${packageName}</span>
            </div>
            <div class="data-row">
                <span class="data-label">Amount Paid</span>
                <span class="data-value">$${Number(amount || 0).toFixed(2)}</span>
            </div>
            <div class="data-row">
                <span class="data-label">Date</span>
                <span class="data-value">${new Date().toLocaleDateString()}</span>
            </div>
            <div class="data-row">
                <span class="data-label">Status</span>
                <span class="data-value" style="color: #10b981;">Paid</span>
            </div>
        </div>

        <p>You can view your invoice and generate your reports directly from your dashboard.</p>
        
        <div class="button-container">
            <a href="https://www.vehiclereportcheck.com/member" class="button">Go to Dashboard</a>
        </div>
    `;

    try {
        const { data, error } = await resend.emails.send({
            from: DEFAULT_FROM,
            to: email,
            subject: 'Your Vehicle Report Check Receipt',
            html: getEmailTemplate('Payment Receipt', bodyContent)
        });

        if (error) console.error('Resend error on receipt:', error);
    } catch (err) {
        console.error('Email error:', err);
    }
};

const sendMarketingBlast = async (emails, subject, bodyContent) => {
    try {
        let sentCount = 0;
        for (const email of emails) {
            try {
                // Determine if there's a hero title we should extract, or just use the subject
                const { data, error } = await resend.emails.send({
                    from: DEFAULT_FROM,
                    to: email,
                    subject: subject,
                    // If bodyContent already contains <html> tags, don't wrap it.
                    // This is useful if the admin uses a highly custom HTML template.
                    html: bodyContent.includes('<html') 
                        ? bodyContent 
                        : getEmailTemplate(subject, bodyContent)
                });
                
                if (error) {
                    console.error(`Failed to send blast to ${email}:`, error);
                } else {
                    sentCount++;
                }
            } catch (e) {
                console.error(`Exception sending blast to ${email}:`, e);
            }
        }
        return { success: true, count: sentCount };
    } catch (err) {
        console.error('Blast error:', err);
        return { success: false, error: err.message };
    }
};

export {
    sendWelcomeEmail,
    sendPaymentReceipt,
    sendMarketingBlast
};
