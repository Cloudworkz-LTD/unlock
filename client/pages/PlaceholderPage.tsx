import { UnlockButton } from "@/components/ui/unlock-button";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description || `The ${title.toLowerCase()} page is coming soon. We're working hard to bring you amazing content.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <UnlockButton size="lg">
              Get Notified
            </UnlockButton>
            <UnlockButton variant="outline" size="lg">
              Back to Home
            </UnlockButton>
          </div>
        </div>
        
        <div className="bg-unlock-light/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Want to help us build this page?
          </h2>
          <p className="text-muted-foreground mb-6">
            Continue prompting to help us fill in the content for this page. Tell us what you'd like to see here!
          </p>
          <UnlockButton variant="outline">
            Share Your Ideas
          </UnlockButton>
        </div>
      </div>
    </div>
  );
}
