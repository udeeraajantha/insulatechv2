'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useSearchParams } from 'next/navigation';
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { services } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get('service');

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <div className="space-y-6">
       <div>
        <h2 className="text-3xl font-bold text-primary">Request Your Free Quote</h2>
        <p className="text-muted-foreground mt-2">
            Fill out the form below and our team will contact you within 24 hours to discuss your project and provide a detailed estimate.
        </p>
      </div>
      <form ref={formRef} action={formAction} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" placeholder="Your full name" required />
                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
            </div>
            <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+971 50 123 4567" required />
                {state.errors?.phone && <p className="text-sm text-destructive mt-1">{state.errors.phone[0]}</p>}
            </div>
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
          {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
        </div>
        
        <div>
          <Label htmlFor="service">Service Needed *</Label>
          <Select name="service" required defaultValue={serviceQuery || undefined}>
              <SelectTrigger id="service">
                  <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                  {services.map((service) => (
                      <SelectItem key={service.slug} value={service.slug}>
                          {service.title}
                      </SelectItem>
                  ))}
                  <SelectItem value="other">Other/Not Sure</SelectItem>
              </SelectContent>
          </Select>
          {state.errors?.service && <p className="text-sm text-destructive mt-1">{state.errors.service[0]}</p>}
        </div>
        <div>
          <Label htmlFor="message">Project Details *</Label>
          <Textarea id="message" name="message" rows={5} placeholder="Please describe your project, property type, approximate square footage, and any specific concerns..." required />
          {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
        </div>
        <SubmitButton />
        <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to be contacted about your project. We respect your privacy and will not share your information.
        </p>
      </form>
    </div>
  );
}
