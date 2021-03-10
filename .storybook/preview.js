import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

import '!style-loader!css-loader!sass-loader!./global.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
