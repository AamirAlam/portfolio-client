import { Mail, Github, Linkedin } from 'lucide-react';

export function ContactInfo() {
  const contacts = [
    {
      icon: Mail,
      href: 'mailto:aamiralam1991@gmail.com',
      label: 'Email'
    },
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    }
  ];

  return (
    <>
      <p className="text-gray-400 mb-8">
        Based in Ghazipur, U.P, I'm always interested in hearing about new blockchain projects and opportunities.
        Whether you have a question or just want to say hi, feel free to reach out!
      </p>
      <div className="flex justify-center space-x-6 mb-12">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <a
              key={index}
              href={contact.href}
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              aria-label={contact.label}
            >
              <Icon className="text-blue-400" size={24} />
            </a>
          );
        })}
      </div>
    </>
  );
}