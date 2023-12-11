import {CodeBlock, atomOneLight} from 'react-code-blocks';

interface CodeBlockProps {
    code: any;
    language: string;
}

function StyledCodeBlock({ code, language }: CodeBlockProps) {
    const showLineNumbers = true;
    const wrapLines = true;
    return (
        <div
            style={{
                fontFamily: 'Fira Code',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                overflowX: 'auto',
            }}
        >
            <div
                style={{
                    width: '100%',
                    flex: 1,
                    background: atomOneLight.sectionColor,
                    color: 'white',
                    paddingBottom: '1em',
                }}
            >
                <h5 style={{textAlign: 'center'}}>Result</h5>
                <CodeBlock
                    {...{showLineNumbers, wrapLines}}
                    text={code}
                    language={language}
                    theme={atomOneLight}
                    wrapLongLines={true}
                    customStyle={{
                        height: '250px',
                        overflowY: 'scroll',
                        borderRadius: '5px',
                        boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
                        fontSize: '0.75rem',
                        margin: '0px 0.75rem',
                    }}
                />
            </div>
        </div>
    );
}

export default StyledCodeBlock;
