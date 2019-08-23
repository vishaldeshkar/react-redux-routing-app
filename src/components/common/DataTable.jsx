import React from 'react';

const Th = ({ item }) => {
    var thArr = new Array();

    for (const key in item) {
        thArr.push(key);
    }

    var ths = thArr.map((item, index) => {
        return <th key={index}>{item.toUpperCase()}</th>
    });

    return (
        <tr>
            {ths}
        </tr>
    );
};

const Td = ({ data }) => {
    return (
        <td>
            {data}
        </td>
    );
};

const Tr = ({ item }) => {
    var tdArr = new Array();

    for (const key in item) {
        var d = item[key];
        tdArr.push(<Td data={d} key={d + key} />);
    }

    return (
        <tr>
            {tdArr}
        </tr>
    );
};

const TBody = ({ items }) => {
    var trs = items.map((item, index) => {
        return <Tr key={index} item={item} />
    });

    return (
        <tbody>
            {trs}
        </tbody>
    );
};

const DataTable = ({ children, items }) => {
    if (items) {
        var item = items[0];
        var Ths = <Th item={item} />;
        var tBody = <TBody items={items} />
    }
    return (
        <div className="row">
            {children ? children : null}
            <table className="table table-hover">
                <thead>
                    {Ths}
                </thead>
                {tBody}
            </table>
        </div>
    );
};

export default DataTable;