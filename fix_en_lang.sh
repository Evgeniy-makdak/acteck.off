#!/bin/bash
# Fix lang="ru" to lang="en" in all en/ HTML files
# Also fix href paths pointing to ru/ to point to en/

echo "=== Fix 1: lang=\"ru\" -> lang=\"en\" ==="
find en/ -name "*.html" -exec sed -i '' 's/lang="ru"/lang="en"/g' {} +
echo "Done."

echo "=== Fix 2: href paths with /ru/ -> /en/ (only relative paths) ==="
# Replace /ru/ with /en/ only in relative paths (starting with ../)
# This handles paths like ../../ru/index.html -> ../../en/index.html
# But NOT external URLs like https://www.reg.ru/
find en/ -name "*.html" -exec sed -i '' 's|href="\.\./\.\.*/ru/|href="\.\./\.\.*/en/|g' {} +
echo "Done."

echo "=== All fixes applied ==="
