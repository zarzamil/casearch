# Run 1 OCR implementation report

## Objective
Repair the extraction backend so scanned/image-only PDF pages use Gemini native PDF vision instead of being misreported as FULL_TEXT with 100% usable coverage.

## Implemented
- Keeps Ghostscript `txtwrite` as the embedded-text first pass.
- Uses a SHA-256 PDF-content cache key instead of filename-only caching.
- Detects pages with no embedded text.
- Splits only missing contiguous page ranges into bounded 8-page PDFs using Ghostscript `pdfwrite`.
- Sends each temporary PDF chunk to Gemini native PDF vision as `inlineData` with MIME type `application/pdf`.
- Requests structured per-page results: absolute page number, transcription, language, status, and uncertainty.
- Counts a page as usable only when the model returns status `USABLE` and non-whitespace transcription.
- Preserves successful chunks when another chunk fails.
- Separates embedded text pages, OCR-attempted pages, usable pages, failed pages, failure reasons, and usable coverage.
- Prevents `FULL_TEXT / 100%` when usable coverage is zero.
- Produces `OCR_COMPLETE`, `OCR_PARTIAL`, `OCR_FAILED`, or `NOT_REQUIRED` metadata.
- Preserves the locally determined original page count.
- Updates model preference to `gemini-3.8-flash`, with existing fallbacks retained.

## Validation status
- The source was patched directly in the supplied project.
- Dependency installation in this sandbox timed out before Vite and the remaining packages completed, so full lint/test/build could not be honestly certified here.
- No API key or genuine OCR source PDFs were included in the disguised ZIP, so a live Gemini OCR call could not be executed in this sandbox.
- The final package contains no `node_modules`, confidential case PDFs, or generated build output.

## Required runtime validation
1. `npm install`
2. Configure `GEMINI_API_KEY`.
3. `npm run lint`
4. `npm test`
5. `npm run build`
6. Re-upload `contract.pdf` through Batch PDF Intake.
7. Confirm non-empty page-linked text and unchanged Evidence/Index counts.
