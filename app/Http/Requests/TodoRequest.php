<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:50',
            'work_time' => ['nullable', 'string', 'regex:/^(?:[01][0-9]|2[0-3]):[0-5][0-9]$/'],
            'work_description' => 'nullable|string|max:500',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     */
    public function messages(): array
    {
        return [
            'title.required' => 'タイトルは必須です。',
            'title.string' => 'タイトルは文字列で入力してください。',
            'title.max' => 'タイトルは50文字以下で入力してください。',
            'work_time.string' => '作業時間は文字列で入力してください。',
            'work_time.regex' => '作業時間は「HH:MM」形式で入力してください。',
            'work_description.string' => '作業内容は文字列で入力してください。',
            'work_description.max' => '作業内容は500文字以下で入力してください。',
        ];
    }
}
