interface Props {
    errors: string | undefined
}

export default function ValidationErrors({ errors }: Props) {
    return (
        <div>
            <div className="mb-4">
                <p className="mt-3 list-disc list-inside text-sm text-red-600">
                    {errors}
                </p>
            </div>
        </div>
    )
}
