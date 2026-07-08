type BreadcrumbItem = {
  label: string;
  href?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export function buildBreadcrumbHtml(items: BreadcrumbItem[]): string {
  const listItems = items
    .map((item, index) => {
      const label = escapeHtml(item.label);
      const content =
        index === items.length - 1 || !item.href
          ? `<span>${label}</span>`
          : `<a href="${escapeHtml(item.href)}">${label}</a>`;
      const current = index === items.length - 1 ? ' aria-current="page"' : "";

      return `<li class="story-detail__breadcrumb-item"${current}>${content}</li>`;
    })
    .join("");

  return `<nav class="story-detail__breadcrumbs" aria-label="Breadcrumb"><ol class="story-detail__breadcrumb-list">${listItems}</ol></nav>`;
}

export function injectBreadcrumbHtml(content: string, items: BreadcrumbItem[]): string {
  const breadcrumbHtml = buildBreadcrumbHtml(items);

  const injectedIntoInner = content.replace(
    /(<div class="(?:informativna-stranica__unutarnji|pitaj-strucnjaka__unutarnji)">)/,
    `$1\n          ${breadcrumbHtml}`
  );

  if (injectedIntoInner !== content) {
    return injectedIntoInner;
  }

  return content.replace(/<main>/, `<main>\n      ${breadcrumbHtml}`);
}
