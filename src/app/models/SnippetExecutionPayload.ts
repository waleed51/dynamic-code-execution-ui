export interface SnippetExecutionPayload {
  id: number; // Snippet ID must be a number
  name: string; // Method name must be a string
  parameters: any[]; // Parameters must be an array
}