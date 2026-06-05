import { useMarkdownContent } from "@/hooks/useMarkdownContent";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

const linkLabels: Record<string, string> = {
  paper: "Paper",
  arxiv: "arXiv",
  code: "Code",
  tool: "Tool",
};

const Publications = () => {
  const { items: publications, loading } = useMarkdownContent('publications');

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-16">Publications</h1>

          {loading ? (
            <p className="text-gray-600">Loading publications...</p>
          ) : publications.length > 0 ? (
            <div className="space-y-12">
              {publications.map((pub) => {
                const links = Object.entries(pub.metadata.links ?? {}) as [string, string][];

                return (
                  <div key={pub.slug} className="border-l-2 border-gray-200 pl-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 leading-relaxed">
                      {pub.metadata.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{pub.metadata.authors}</p>
                    <p className="text-gray-500 text-sm mb-3">
                      {pub.metadata.venue}, {pub.metadata.year}
                    </p>
                    {pub.content.trim() && (
                      <div className="prose text-gray-600 mb-3">
                        <MarkdownRenderer content={pub.content} />
                      </div>
                    )}
                    {links.length > 0 && (
                      <div className="flex flex-wrap gap-4">
                        {links.map(([label, href]) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 hover:underline text-sm"
                          >
                            {linkLabels[label] ?? label} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Add publications to the <code className="bg-gray-100 px-2 py-1 rounded">content/publications/</code> folder.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;
