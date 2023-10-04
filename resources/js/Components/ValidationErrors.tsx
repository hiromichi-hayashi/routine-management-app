interface Props {
    errors: string | undefined
}

const ValidationErrors = ({ errors }: Props) => {
    if (!errors) return null // エラーがない場合は何もレンダリングしない

    return (
        <div className="mb-4">
            <p className="mt-3 list-disc list-inside text-sm text-red-600">
                {errors}
            </p>
        </div>
    )
}

export default ValidationErrors
