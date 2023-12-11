import { CodeBlock, dracula } from 'react-code-blocks';

interface CodeBlockProps {
    code: string;
    language: string;
    showLineNumbers: boolean;
}

function MyCodeBlock({ code, language, showLineNumbers }: CodeBlockProps) {
    return (
        <div style={{ minWidth: "400px", fontSize: "20px" }}>
        <CodeBlock
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
            theme={dracula}
        />
        </div>
    );
}

export default MyCodeBlock;
