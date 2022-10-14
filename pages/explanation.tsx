import type { NextPage } from 'next'
import { Horizon } from "@/components/Horizon";

const mainCode = `
export const Horizon: React.FC = () => {
    return (
        <hr />
    )
}
`

const Explanation: NextPage = () => {
    return (
        <main>
            <h2>水平線</h2>
            <Horizon />
            <pre>
                水平線は
                <code>{mainCode}</code>
                で表示
            </pre>

        </main>
    )
}

export default Explanation
