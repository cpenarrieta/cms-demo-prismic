import React from "react";
import Banner from "../components/Banner";
import { useLocale } from "../components/LocaleContext";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { RichText } from "prismic-reactjs";

const ADD_ADDRESS_CMS_QUERY = gql`
  query addAddress(
    $locale: String!
    $experiments: [String!] = ["exp-control"]
  ) {
    allAdd_addresss(lang: $locale, tags_in: $experiments) {
      edges {
        node {
          add_address_title
          add_address_text_body
          street1
          street2
          city
          state
          zipcode
          phone
          submit_text
          banner {
            ... on Banner {
              title
              content
              type
            }
          }
        }
      }
    }
  }
`;

function AddAddress() {
  const { locale } = useLocale();
  const { loading, data } = useQuery(ADD_ADDRESS_CMS_QUERY, {
    variables: {
      locale,
      experiments: window.experiments || ["exp-control"],
    },
  });

  const cmsData = data?.allAdd_addresss?.edges?.[0]?.node;

  if (loading || !cmsData) {
    return <div>loading...</div>;
  }

  return (
    <div className="add-address">
      <div className="add-address-header">
        <h2>{cmsData.add_address_title}</h2>
        <p>{RichText.asText(cmsData.add_address_text_body)}</p>
      </div>
      <div className="add-address-content">
        <form action="" method="get" className="form-address">
          <div className="form-address">
            <label htmlFor="street1">{cmsData.street1}</label>
            <input type="text" name="street1" id="street1" />
          </div>
          <div className="form-address">
            <label htmlFor="street2">{cmsData.street2}</label>
            <input type="text" name="street2" id="street2" />
          </div>
          <div className="form-address">
            <label htmlFor="city">{cmsData.city}</label>
            <input type="text" name="city" id="city" />
          </div>
          <div className="form-address">
            <label htmlFor="state">{cmsData.state}</label>
            <select>
              <option value="AK">AK</option>
              <option value="AL">AL</option>
              <option value="AR">AR</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VA">VA</option>
              <option value="VT">VT</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>
              <option value="WV">WV</option>
              <option value="WY">WY</option>
            </select>
          </div>
          <div className="form-address">
            <label htmlFor="zipcode">{cmsData.zipcode}</label>
            <input type="text" name="zipcode" id="zipcode" />
          </div>
          <div className="form-address">
            <label htmlFor="phone">{cmsData.phone}</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div className="form-address">
            <input type="submit" value={cmsData.submit_text} />
          </div>
        </form>
        {cmsData.banner && (
          <Banner
            title={cmsData.banner.title}
            content={RichText.render(cmsData.banner.content)}
            type={cmsData.banner.type}
          />
        )}
      </div>
    </div>
  );
}

export default AddAddress;
