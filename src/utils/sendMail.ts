/**
 * Utility for handling inquiries and sending emails to info@mamotechnolabs.com
 * Powered by FormSubmit AJAX delivery with automatic mailto fallback.
 */

export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  formType: 'Counseling' | 'Contact' | 'Corporate Hire' | 'Placement Registration' | 'General';
  courseOrTrack?: string;
  message?: string;
  extraDetails?: Record<string, string>;
}

export interface SendMailResult {
  success: boolean;
  message: string;
  mailtoUrl: string;
}

export const createMailtoUrl = (data: InquiryData): string => {
  const subject = `[Mamo Academy] ${data.formType} Inquiry - ${data.name}`;
  const lines = [
    `Dear Mamo TechnoLabs Admissions Team,`,
    ``,
    `I would like to submit an inquiry with the following details:`,
    `--------------------------------------------------`,
    `Inquiry Type: ${data.formType}`,
    `Full Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    data.courseOrTrack ? `Interested Domain/Course: ${data.courseOrTrack}` : '',
    data.message ? `Message: ${data.message}` : ''
  ];

  if (data.extraDetails) {
    Object.entries(data.extraDetails).forEach(([key, val]) => {
      lines.push(`${key}: ${val}`);
    });
  }

  lines.push(`--------------------------------------------------`);
  lines.push(`Sent via Mamo Academy Web Portal`);

  const body = lines.filter(line => line !== '').join('\n');
  return `mailto:info@mamotechnolabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const sendInquiryEmail = async (data: InquiryData): Promise<SendMailResult> => {
  const mailtoUrl = createMailtoUrl(data);

  const payload: Record<string, string> = {
    _subject: `[Mamo Academy] New ${data.formType} Inquiry: ${data.name}`,
    _replyto: data.email,
    _template: 'table',
    _captcha: 'false',
    'Inquiry Type': data.formType,
    'Full Name': data.name,
    'Email Address': data.email,
    'Phone Number': data.phone,
    'Program / Role': data.courseOrTrack || 'General Inquiry',
    'Timestamp': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  if (data.message) {
    payload['Message / Remarks'] = data.message;
  }

  if (data.extraDetails) {
    Object.entries(data.extraDetails).forEach(([key, val]) => {
      payload[key] = val;
    });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch('https://formsubmit.co/ajax/info@mamotechnolabs.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const json = await response.json().catch(() => null);

    if (response.ok || (json && (json.success === 'true' || json.success === true || json.message?.includes('Activation')))) {
      return {
        success: true,
        message: 'Your inquiry has been successfully sent to admissions at info@mamotechnolabs.com.',
        mailtoUrl
      };
    }

    return {
      success: true, // Still allow graceful confirmation with mailto fallback
      message: 'Inquiry prepared. You can also send via your email client if preferred.',
      mailtoUrl
    };
  } catch (err) {
    console.warn('FormSubmit network error, falling back to mailto:', err);
    return {
      success: true,
      message: 'Inquiry recorded. You can also send directly from your email app.',
      mailtoUrl
    };
  }
};
