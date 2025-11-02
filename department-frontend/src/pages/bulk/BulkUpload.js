import BulkUploader from "../../components/BulkUploader";

export default function BulkUpload() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bulk Data Upload</h1>
        <p className="text-gray-600">
          Upload Excel files to add multiple records at once. Ensure your file matches the required column format.
        </p>
      </div>

      {/* Upload Sections */}
      <div className="space-y-6">
        {/* Faculty */}
        <BulkUploader
          title="Faculty Bulk Upload"
          endpoint="/api/v1/faculty/bulk-upload"
          requiredColumns={[
            "firstName",
            "lastName",
            "email",
            "department",
            "designation",
            "researchArea",
            "teaches",
            "joiningDate"
          ]}
        />

        {/* Publications */}
        <BulkUploader
          title="Publication Bulk Upload"
          endpoint="/api/v1/publication/bulk"
          requiredColumns={[
            "Title",
            "Authors",
            "Year",
            "Journal",
            "Volume",
            "Issue",
            "Pages",
            "DOI"
          ]}
        />

        {/* Projects */}
        <BulkUploader
          title="Project Bulk Upload"
          endpoint="/api/v1/project/bulk"
          requiredColumns={[
            "Project Title",
            "PI",
            "Co-PI",
            "Collaborator",
            "Funding Agency",
            "Date Sanctioned",
            "Date Completion",
            "Status",
            "Notable Achievements",
            "Sanction Letter Link",
            "Total INR",
            "Type",
            "Category"
          ]}
        />

        {/* Conferences */}
        <BulkUploader
          title="Conference Bulk Upload"
          endpoint="/api/v1/conference/upload"
          requiredColumns={[
            "type",
            "authors",
            "title",
            "conferenceName",
            "pages",
            "publisher",
            "location",
            "date"
          ]}
        />

        {/* PhD Theses */}
        <BulkUploader
          title="PhD Thesis Bulk Upload"
          endpoint="/api/v1/phdThesis/bulk"
          requiredColumns={[
            "Name",
            "StudentId",
            "Topic",
            "Supervisor",
            "CoSupervisor",
            "YearAwarded"
          ]}
        />

        {/* Patents */}
        <BulkUploader
          title="Patent Bulk Upload"
          endpoint="/api/v1/patent/bulk"
          requiredColumns={[
            "Authors",
            "Title",
            "Application Number",
            "Filing Date",
            "Country",
            "Status"
          ]}
        />

        {/* Published Books */}
        <BulkUploader
          title="Published Book Bulk Upload"
          endpoint="/api/v1/publishedBook/bulk"
          requiredColumns={[
            "Title",
            "Author",
            "Type",
            "Publisher",
            "Series",
            "Year",
            "Link"
          ]}
        />

        {/* Department Events */}
        <BulkUploader
          title="Department Event Bulk Upload"
          endpoint="/api/v1/departmentEvent/bulk"
          requiredColumns={[
            "Title",
            "Type",
            "Description",
            "Date",
            "OrganizedBy"
          ]}
        />

        {/* Invited Talks */}
        <BulkUploader
          title="Invited Talk Bulk Upload"
          endpoint="/api/v1/invitedTalk/bulk"
          requiredColumns={[
            "Speaker",
            "Title",
            "Event",
            "Organizer",
            "Location",
            "Date",
            "Mode",
            "Role"
          ]}
        />

        {/* Faculty Awards */}
        <BulkUploader
          title="Faculty Award Bulk Upload"
          endpoint="/api/v1/facultyAward/bulk"
          requiredColumns={[
            "Faculty Name",
            "Title",
            "Organization",
            "Journal Info",
            "Year",
            "Category"
          ]}
        />
      </div>

      {/* Help Section */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-900 mb-2">📝 Important Notes:</h3>
        <ul className="list-disc list-inside text-yellow-800 space-y-1">
          <li>Only .xlsx files are accepted</li>
          <li>Column names must match exactly as shown above (case-sensitive)</li>
          <li>For comma-separated fields (like authors), use commas or '&' to separate values</li>
          <li>Date fields should be in a recognizable format (YYYY-MM-DD preferred)</li>
          <li>Empty optional fields will be skipped automatically</li>
        </ul>
      </div>
    </div>
  );
}