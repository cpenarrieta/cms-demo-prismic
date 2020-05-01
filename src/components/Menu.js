import React from "react";
import { Link } from "react-router-dom";
import { useLocale } from "./LocaleContext";
import gql from "graphql-tag";
import useCmsQuery from "../hooks/useCmsQuery";

const MENUS_CMS_QUERY = gql`
  query allMenus($locale: String!) {
    allMenus(lang: $locale) {
      edges {
        node {
          menus {
            title
            route
          }
        }
      }
    }
  }
`;

function Menu() {
  const { locale, setLocale } = useLocale();
  const { loading, data } = useCmsQuery(MENUS_CMS_QUERY);

  if (loading) {
    return <div>loading...</div>;
  }

  const cmsData = data?.allMenus?.edges?.[0]?.node;

  return (
    <nav>
      <ul className="menu">
        {cmsData.menus.map((menu) => (
          <li>
            <Link to={menu.route}>{menu.title}</Link>
          </li>
        ))}
        <li>
          <select
            value={locale}
            name="locale-select"
            id="locale-select"
            onChange={(e) => setLocale(e.target.value)}
          >
            <option value="en-us">English</option>
            <option value="es-es">Spanish</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
