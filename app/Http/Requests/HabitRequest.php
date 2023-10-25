<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HabitRequest extends FormRequest
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
    public function rules()
    {
        return [
            'title' => 'required|string|max:50',
            'task_type' => 'required|in:habit_task,shared_habit_task',
            'category' => 'required|in:study,exercise,work,daily',
            'difficulty' => 'required|in:easy,medium,hard',
            'todos' => 'required|array|min:1',
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
            'task_type.required' => 'タスク種別は必須です。',
            'task_type.in' => 'タスク種別は正しい値を選択してください。',
            'category.required' => 'カテゴリは必須です。',
            'category.in' => 'カテゴリは正しい値を選択してください。',
            'difficulty.required' => '難易度は必須です。',
            'difficulty.in' => '難易度は正しい値を選択してください。',
            'todos.required' => 'タスクは必須です。',
            'todos.array' => 'タスクは正しい形式で入力してください。',
            'work_description.string' => '作業内容は文字列で入力してください。',
            'work_description.max' => '作業内容は500文字以下で入力してください。',
        ];
    }
}
