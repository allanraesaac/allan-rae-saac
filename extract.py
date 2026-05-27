from pypdf import PdfReader
import sys

def extract_text_from_pdf(pdf_path, output_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print("Successfully extracted text")
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

if __name__ == "__main__":
    extract_text_from_pdf("linkedin.pdf", "linkedin.txt")
