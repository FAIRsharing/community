<template>
    <div class="container mainContainer">
        <div class="row">
            <div class="col-12" style="display:block;">
                <pre>{{nodes | jsonDump}}</pre>
            </div>
            <div class="col-12">
                <highcharts :constructor-type="'ganttChart'" :options="chartOptions"></highcharts>
            </div>
        </div>
    </div>
</template>

<script>
    import StudyDesign from './minimal_study.json'
    import {Chart} from 'highcharts-vue'
    import Highcharts from 'highcharts'

    let today = new Date(),
        day = 1000 * 60 * 60 * 24,
        // Utility functions
        dateFormat = Highcharts.dateFormat,
        defined = Highcharts.defined,
        isObject = Highcharts.isObject,
        reduce = Highcharts.reduce;

    // Set to 00:00:00:000 today
    today.setUTCHours(0);
    today.setUTCMinutes(0);
    today.setUTCSeconds(0);
    today.setUTCMilliseconds(0);
    today = today.getTime();

    export default {
        name: "Datascriptor.vue",
        components: {
            highcharts: Chart,
        },
        data() {
            return {
                nodes: StudyDesign,
                chartOptions: {
                    series: [
                        {
                            name: 'Offices',
                            data: [
                                {
                                    name: 'Group 1',
                                    id: 'G1',
                                    start: 1,
                                    end: 3
                                },
                                {
                                    name: 'screem',
                                    id: 'prepare_building',
                                    parent: 'G1',
                                    start: 1,
                                    end: 3
                                },
                                {
                                    name: 'Inspect building',
                                    id: 'inspect_building',
                                    dependency: 'prepare_building',
                                    parent: 'G1',
                                    start: 2,
                                    end: 8
                                },
                                {
                                    name: 'Passed inspection',
                                    id: 'passed_inspection',
                                    dependency: 'inspect_building',
                                    parent: 'G1',
                                    start: 4,
                                    end: 4,
                                    milestone: true,
                                    owner: 'Peter'
                                },
                                {
                                    name: 'Relocate',
                                    id: 'relocate',
                                    dependency: 'passed_inspection',
                                    parent: 'G1',
                                    owner: 'Josh'
                                },
                                {
                                    name: 'Relocate staff',
                                    id: 'relocate_staff',
                                    parent: 'relocate',
                                    start: today + 10 * day,
                                    end: today + 11 * day,
                                    owner: 'Mark'
                                },
                                {
                                    name: 'Relocate test facility',
                                    dependency: 'relocate_staff',
                                    parent: 'relocate',
                                    start: today + 11 * day,
                                    end: today + 13 * day,
                                    owner: 'Anne'
                                },
                                {
                                    name: 'Relocate cantina',
                                    dependency: 'relocate_staff',
                                    parent: 'relocate',
                                    start: today + 11 * day,
                                    end: today + 14 * day
                                }
                            ]
                        },
                        {
                            name: 'Product',
                            data: [
                                {
                                    name: 'New product launch',
                                    id: 'new_product',
                                    owner: 'Peter'
                                },
                                {
                                    name: 'Development',
                                    id: 'development',
                                    parent: 'new_product',
                                    start: today - day,
                                    end: today + (11 * day),
                                    completed: {
                                        amount: 0.6,
                                        fill: '#e80'
                                    },
                                    owner: 'Susan'
                                },
                                {
                                    name: 'Beta',
                                    id: 'beta',
                                    dependency: 'development',
                                    parent: 'new_product',
                                    start: today + 12.5 * day,
                                    milestone: true,
                                    owner: 'Peter'
                                },
                                {
                                    name: 'Final development',
                                    id: 'finalize',
                                    dependency: 'beta',
                                    parent: 'new_product',
                                    start: today + 13 * day,
                                    end: today + 17 * day
                                },
                                {
                                    name: 'Launch',
                                    dependency: 'finalize',
                                    parent: 'new_product',
                                    start: today + 17.5 * day,
                                    milestone: true,
                                    owner: 'Peter'
                                }
                            ]
                        }
                    ],
                    tooltip: {
                        pointFormatter: function () {
                            var point = this,
                                format = '%e. %b',
                                options = point.options,
                                completed = options.completed,
                                amount = isObject(completed) ? completed.amount : completed,
                                status = ((amount || 0) * 100) + '%',
                                lines;

                            lines = [{
                                value: point.name,
                                style: 'font-weight: bold;'
                            }, {
                                title: 'Start',
                                value: dateFormat(format, point.start)
                            }, {
                                visible: !options.milestone,
                                title: 'End',
                                value: dateFormat(format, point.end)
                            }, {
                                title: 'Completed',
                                value: status
                            }, {
                                title: 'Owner',
                                value: options.owner || 'unassigned'
                            }];

                            return reduce(lines, function (str, line) {
                                var s = '',
                                    style = (
                                        defined(line.style) ? line.style : 'font-size: 0.8em;'
                                    );
                                if (line.visible !== false) {
                                    s = (
                                        '<span style="' + style + '">' +
                                        (defined(line.title) ? line.title + ': ' : '') +
                                        (defined(line.value) ? line.value : '') +
                                        '</span><br/>'
                                    );
                                }
                                return str + s;
                            }, '');
                        }
                    },
                    title: {
                        text: 'Gantt Project Management'
                    },
                    xAxis: {
                        currentDateIndicator: true,
                        min: 1,
                        max: 100
                    }
                }
            }
        },
        filters: {
            jsonDump: function(variable){
                return JSON.stringify(variable, null, 4)
            }
        }
    }

</script>

<style scoped>

    .mainContainer {
        padding:20px;
        border:1px solid #ccc;
        box-shadow: 3px 3px 4px #ccc;
    }

</style>