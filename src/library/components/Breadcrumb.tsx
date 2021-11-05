interface Crumb {
  name: string;
  href: string;
}

interface Props {
  crumbs: Crumb[];
  currentPage: string;
}

const Breadcrumb = ({ crumbs, currentPage }: Props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="ads-breadcrumbs">
        {crumbs.map(crumb => (
          <li key={`crumb${crumb.name}`} className="ads-breadcrumb-item">
            <a href={crumb.href}>{crumb.name}</a>
          </li>
        ))}
        <li className="ads-breadcrumb-item ads-breadcrumb-item-active" aria-current="page">{currentPage}</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;