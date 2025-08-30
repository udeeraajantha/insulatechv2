'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { services } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

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
        'Submit Inquiry'
      )}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

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
    <Card>
      <CardHeader>
        <CardTitle>Request a Free Consultation</CardTitle>
        <CardDescription>Fill out the form below and one of our experts will contact you shortly.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required />
            {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" required />
            {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input id="phone" name="phone" type="tel" />
          </div>
          <div>
            <Label htmlFor="service">Service of Interest</Label>
            <Select name="service" required>
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
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} required />
            {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
