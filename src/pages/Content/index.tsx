import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const MAX_CHARS = 4000;

const ContentGenerator = () => {
  const [reference, setReference] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement content generation logic
  };

  const handleClear = () => {
    setReference('');
    setPrompt('');
  };

  return (
    <div className="min-h-screen w-full bg-[#f7fafd] py-10 px-2">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Content Generator</h1>
        <p className="text-center text-muted-foreground mb-8 text-lg">Paste your reference material and add a prompt to generate customized content</p>
        <Card className="mb-8">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">📝</span>
              <CardTitle className="text-xl">Input</CardTitle>
            </div>
            <CardDescription>Provide your reference material and additional instructions</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="reference" className="mb-1 block">Reference Material</Label>
                <Textarea
                  id="reference"
                  placeholder="Paste your reference material here... (articles, documents, notes, etc.)"
                  value={reference}
                  onChange={e => setReference(e.target.value.slice(0, MAX_CHARS))}
                  className="min-h-[140px] resize-none"
                  maxLength={MAX_CHARS}
                />
                <div className="text-xs text-muted-foreground mt-1 text-right">{reference.length} characters</div>
              </div>
              <div>
                <Label htmlFor="prompt" className="mb-1 block">Additional Prompt</Label>
                <Input
                  id="prompt"
                  placeholder="What would you like me to generate based on the reference material?"
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1" disabled={!reference.trim() && !prompt.trim()}>
                  <span className="mr-2">⚡️</span> Generate
                </Button>
                <Button type="button" variant="secondary" onClick={handleClear}>
                  Clear
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="bg-[#eaf3fb] border border-[#dbeafe] rounded-xl p-5 mt-6 max-w-3xl mx-auto">
          <div className="flex items-center mb-2">
            <span className="text-lg mr-2">💡</span>
            <span className="font-semibold text-base">Tips for better results:</span>
          </div>
          <ul className="text-sm text-muted-foreground list-disc pl-6 space-y-1">
            <li>Provide clear and relevant reference material</li>
            <li>Be specific in your additional prompt</li>
            <li>Include context about the desired output format or style</li>
            <li>The more detailed your prompt, the better the results</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;
