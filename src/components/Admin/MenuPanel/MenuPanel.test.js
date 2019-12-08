import React from "react";
import MenuPanel from "./MenuPanel";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const props = {
    currentTab: 1,
    tabs: [
        {
            name: "Lịch chiếu"
        },
        {
            name: "Phim"
        },
        {
            name: "Ưu đãi"
        },
        {
            name: "Chi nhánh"
        },
        {
            name: "Thống kê"
        }]
};

describe("MenuPanel", () => {
    it("should render correctly with props", () => {

        const component = shallow(<MenuPanel {...props} />);
        expect(component.find('.menu-panel-admin-left__menu--tab')).toHaveLength(props.tabs.length);
        expect(component.find('.-active').length).toEqual(1);
        expect(component.find('.-active').text()).toEqual("Phim");

    });
});
