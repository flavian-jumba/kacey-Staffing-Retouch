import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, PlusIcon } from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

export function ContactCard({
  title = 'Contact With Us',
  description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'bg-card border relative grid h-full w-full shadow-lg md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
      {...props}
    >
      <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-[#8B1A4A]" />
      <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-[#8B1A4A]" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-[#8B1A4A]" />
      <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-[#8B1A4A]" />

      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-4 px-4 py-8 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-gray-500 max-w-xl text-sm md:text-base lg:text-lg">
            {description}
          </p>
          <div className="grid gap-2 md:grid md:grid-cols-2 lg:grid-cols-3">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>

          {/* Map */}
          <div className="mt-6 w-full h-56 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=-1.2650654%2C36.8057047&z=17&hl=en&output=embed"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Kacey Staffing Location"
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          'bg-gray-50 flex h-full w-full items-start border-t p-6 md:col-span-1 md:border-t-0 md:border-l',
          formSectionClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoProps) {
  return (
    <div className={cn('flex items-center gap-3 py-3', className)} {...props}>
      <div className="bg-[#8B1A4A]/10 rounded-lg p-3 flex-shrink-0">
        <Icon className="h-5 w-5 text-[#8B1A4A]" />
      </div>
      <div>
        <p className="font-semibold text-gray-800 text-sm">{label}</p>
        <p className="text-gray-500 text-xs">{value}</p>
      </div>
    </div>
  );
}
