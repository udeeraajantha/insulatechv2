'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Loader2, AlertTriangle } from 'lucide-react';
import { generateFaqAction } from '@/lib/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface FaqGeneratorProps {
  serviceName: string;
  serviceDescription: string;
}

export function FaqGenerator({ serviceName, serviceDescription }: FaqGeneratorProps) {
  const [faqContent, setFaqContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateFaqs = async () => {
    setIsLoading(true);
    setError(null);
    setFaqContent(null);

    const result = await generateFaqAction(serviceName, serviceDescription);

    if (result.success) {
      setFaqContent(result.faq);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  };

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>AI-Powered FAQs</CardTitle>
        <CardDescription>
          Generate a list of FAQs for this service.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleGenerateFaqs} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Generate FAQs
            </>
          )}
        </Button>

        {error && (
            <Alert variant="destructive" className="mt-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        
        {isLoading && !error && (
            <div className="mt-6 text-center text-muted-foreground">
                <p>Our AI is crafting some questions and answers for you...</p>
            </div>
        )}
        
        {faqContent && (
          <div className="mt-6 prose prose-sm max-w-none rounded-lg border bg-muted/30 p-4 h-96 overflow-y-auto">
            <pre className="whitespace-pre-wrap bg-transparent p-0 font-sans text-foreground">{faqContent}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
