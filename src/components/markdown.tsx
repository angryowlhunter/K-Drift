import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

// Server-rendered Markdown with styling and heading ids (for the table of contents).
export function Markdown({ children }: { children: string }) {
  return (
    <div className="space-y-4 leading-relaxed text-foreground/90">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={{
          h2: (props) => (
            <h2 className="scroll-mt-24 pt-4 text-xl font-bold tracking-tight" {...props} />
          ),
          h3: (props) => (
            <h3 className="scroll-mt-24 pt-2 text-lg font-semibold" {...props} />
          ),
          p: (props) => <p className="text-[15px]" {...props} />,
          ul: (props) => <ul className="ml-5 list-disc space-y-1.5 text-[15px]" {...props} />,
          ol: (props) => <ol className="ml-5 list-decimal space-y-1.5 text-[15px]" {...props} />,
          li: (props) => <li className="pl-1" {...props} />,
          a: (props) => (
            <a className="font-medium text-primary underline underline-offset-2" {...props} />
          ),
          strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
          blockquote: (props) => (
            <blockquote
              className="rounded-r-lg border-l-4 border-primary/40 bg-muted/50 px-4 py-2 text-[15px] text-muted-foreground"
              {...props}
            />
          ),
          code: (props) => (
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm" {...props} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
