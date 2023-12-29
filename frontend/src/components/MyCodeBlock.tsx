import { CodeBlock, dracula } from 'react-code-blocks';

interface CodeBlockProps {
    code: any;
    language: string;
    showLineNumbers: boolean;
}

function MyCodeBlock({ code, language, showLineNumbers }: CodeBlockProps) {
    return (
        <div style={{ minWidth: "600px", fontSize: "20px", flexWrap: "wrap", maxWidth: "400px" }}>
        <CodeBlock
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
            theme={dracula}
            wrapLongLines={true}
            customStyle={{
                height: '450px',
                overflowY: 'scroll',
            }}
            // wrapLines={true}
        />
        </div>
    );
}

export default MyCodeBlock;
