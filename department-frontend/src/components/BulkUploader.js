import { useState } from "react";

export default function BulkUploader({ 
  title, 
  endpoint, 
  requiredColumns, 
  apiBasePath = "http://localhost:8080",
  fileFieldName = "file" // Allow customization of field name
}) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate file type
      if (!selectedFile.name.endsWith('.xlsx') && !selectedFile.name.endsWith('.xls')) {
        alert('Please select an Excel file (.xlsx or .xls)');
        e.target.value = ''; // Clear the input
        return;
      }
      setFile(selectedFile);
      setResult(null); // Clear previous results
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }

    setUploading(true);
    setResult(null);

    const formData = new FormData();
    formData.append(fileFieldName, file);

    console.log(`Uploading to: ${apiBasePath}${endpoint}`);
    console.log(`File name: ${file.name}, Size: ${file.size} bytes`);

    try {
      const res = await fetch(`${apiBasePath}${endpoint}`, {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header - browser will set it with boundary
      });

      console.log('Response status:', res.status);
      
      // Try to parse as JSON
      let data;
      const contentType = res.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        // If not JSON, get text and show error
        const text = await res.text();
        console.error('Non-JSON response:', text.substring(0, 200));
        throw new Error('Server returned non-JSON response. Check if backend endpoint exists.');
      }

      console.log('Response data:', data);

      if (res.ok) {
        setResult({
          success: true,
          message: data.message || 'Upload successful',
          count: extractCount(data.message || data.publications?.length || data.faculties?.length || data.projects?.length || ''),
        });
        setFile(null); // Clear file after success
        // Reset file input
        const fileInput = document.getElementById(`file-input-${title.replace(/\s/g, '-')}`);
        if (fileInput) fileInput.value = '';
      } else {
        setResult({
          success: false,
          message: data.message || data.error || 'Upload failed',
        });
      }
    } catch (err) {
      console.error('Upload error:', err);
      setResult({
        success: false,
        message: `Error: ${err.message}. Check console for details.`,
      });
    } finally {
      setUploading(false);
    }
  };

  // Extract count from message like "45 records uploaded successfully"
  const extractCount = (message) => {
    if (!message) return null;
    const match = message.toString().match(/(\d+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      {/* Header */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>

      {/* Required Columns Info */}
      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">📋 Required Excel Columns:</h4>
        <div className="flex flex-wrap gap-2">
          {requiredColumns.map((col, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {col}
            </span>
          ))}
        </div>
        <p className="text-xs text-blue-700 mt-2">
          ⚠️ Column names must match exactly (case-sensitive)
        </p>
      </div>

      {/* File Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Select Excel File (.xlsx)
        </label>
        <input
          id={`file-input-${title.replace(/\s/g, '-')}`}
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={uploading}
        />
        {file && (
          <p className="mt-2 text-sm text-gray-600">
            Selected: <span className="font-medium">{file.name}</span> ({(file.size / 1024).toFixed(2)} KB)
          </p>
        )}
      </div>

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          !file || uploading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {uploading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Uploading...
          </span>
        ) : (
          'Upload File'
        )}
      </button>

      {/* Result Message */}
      {result && (
        <div
          className={`mt-4 p-4 rounded-lg ${
            result.success
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}
        >
          <div className="flex items-start">
            <span className="text-2xl mr-3">
              {result.success ? '✅' : '❌'}
            </span>
            <div className="flex-1">
              <p
                className={`font-medium ${
                  result.success ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {result.success ? 'Success!' : 'Error'}
              </p>
              <p className={result.success ? 'text-green-700' : 'text-red-700'}>
                {result.message}
              </p>
              {result.success && result.count && (
                <p className="text-green-600 font-semibold mt-1 text-lg">
                  📊 {result.count} records uploaded
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}