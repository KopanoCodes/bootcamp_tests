function mostProfitableDepartment(salesData) {
    const departmentSales = {};

    for (const sale of salesData) {
        const department = sale.department;
        const sales = sale.sales;

        if (department in departmentSales) {
            departmentSales[department] += sales;
        } else {
            departmentSales[department] = sales;
        }
    }

    let mostProfitableDepartment = Object.keys(departmentSales)[0];
    for (const department in departmentSales) {
        if (departmentSales[department] > departmentSales[mostProfitableDepartment]) {
            mostProfitableDepartment = department;
        }
    }

    return mostProfitableDepartment;
}

function mostProfitableDay(salesData) {
    const daySales = {
        'Monday': 0,
        'Tuesday': 0,
        'Wednesday': 0,
        'Thursday': 0,
        'Friday': 0,
        'Saturday': 0,
        'Sunday': 0
    };

    for (const sale of salesData) {
        const day = sale.day;
        const sales = sale.sales;
        daySales[day] += sales;
    }

    let mostProfitableDay = Object.keys(daySales)[0];
    for (const day in daySales) {
        if (daySales[day] > daySales[mostProfitableDay]) {
            mostProfitableDay = day;
        }
    }

    return mostProfitableDay;
}

const salesData = [
    { department: 'hardware', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
    { department: 'hardware', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
    { department: 'carpentry', sales: 1540, day: 'Tuesday' },
    { department: 'hardware', sales: 1500, day: 'Wednesday' },
    { department: 'outdoor', sales: 8507, day: 'Wednesday' },
    { department: 'carpentry', sales: 8009, day: 'Wednesday' },
    { department: 'hardware', sales: 12000, day: 'Thursday' },
    { department: 'outdoor', sales: 18007, day: 'Thursday' },
    { department: 'carpentry', sales: 6109, day: 'Thursday' },
    { department: 'hardware', sales: 7005, day: 'Friday' },
    { department: 'outdoor', sales: 12006, day: 'Friday' },
    { department: 'carpentry', sales: 16109, day: 'Friday' }
];

const salesData2 = [
    { department: 'electronics', sales: 4500, day: 'Monday' },
    { department: 'outdoor', sales: 1500, day: 'Monday' },
    { department: 'carpentry', sales: 5500, day: 'Monday' },
    { department: 'steelwork', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
    { department: 'carpentry', sales: 1540, day: 'Tuesday' },
    { department: 'hardware', sales: 1500, day: 'Wednesday' },
    { department: 'outdoor', sales: 8507, day: 'Wednesday' },
    { department: 'carpentry', sales: 8009, day: 'Wednesday' },
    { department: 'hardware', sales: 12000, day: 'Thursday' },
    { department: 'carpentry', sales: 6109, day: 'Thursday' },
    { department: 'hardware', sales: 7005, day: 'Friday' },
    { department: 'electronics', sales: 12006, day: 'Friday' },
    { department: 'electronics', sales: 16109, day: 'Saturday' },
    { department: 'steelwork', sales: 7500, day: 'Tuesday' },
    { department: 'outdoor', sales: 2505, day: 'Tuesday' },
    { department: 'carpentry', sales: 1540, day: 'Tuesday' },
    { department: 'steelwork', sales: 1500, day: 'Wednesday' },
    { department: 'carpentry', sales: 8009, day: 'Wednesday' }
];