export function slugify(string) {
   return string
   .toLowerCase()
   .replace(/[^a-z0-9\s-]/, "")
   .replace(/(\s|-)+/, "-")
}