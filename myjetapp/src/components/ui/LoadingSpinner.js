export function LoadingSpinner() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mb-4"></div>
                <div className="text-xl font-semibold text-gray-900">Signing in...</div>
                <div className="text-sm text-gray-600 mt-2">Please wait while we verify your credentials</div>
            </div>
        </div>
    );
}
