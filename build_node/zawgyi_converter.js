"use strict";
/* Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function runPhase(rules, inString) {
    var outString = "";
    var midString = inString;
    var startOfString = true;
    while (midString.length > 0) {
        var foundRule = false;
        for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
            var rule = rules_1[_i];
            if (rule.matchOnStart == null || startOfString) {
                var m = midString.match(rule.p);
                // Matching uses only unnamed groups
                if (m != null) {
                    foundRule = true;
                    var rightPartSize = midString.length - m[0].length;
                    midString = midString.replace(rule.p, rule.s);
                    var newStart = midString.length - rightPartSize;
                    if (rule.revisit == null) {
                        // New location is reset unless "revisit" is set to beginning of replacement.
                        outString += midString.substring(0, newStart);
                        midString = midString.substring(newStart);
                    }
                }
            }
        }
        if (!foundRule) {
            outString += midString[0];
            midString = midString.substring(1);
        }
        startOfString = false;
    }
    return outString;
    // End of phase
}
function runAllPhases(allRules, inString) {
    var outString = inString;
    for (var _i = 0, allRules_1 = allRules; _i < allRules_1.length; _i++) {
        var rules = allRules_1[_i];
        outString = runPhase(rules, outString);
    }
    return outString;
}
// TRANSLITERATION RULES
// Input path: genconvert/input/my-t-my-s0-zawgyi.txt
function getAllRulesZ2U() {
    var rules0 = [
        {
            p: RegExp('^' + '([\u1000-\u1021])\u103A\u1064'),
            s: '\u1004\u103A\u1039$1\u103B',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u1064'),
            s: '\u1004\u103A\u1039$1',
        },
        {
            p: RegExp('^' + '\u1064'),
            s: '\u1004\u103A\u1039',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u108B'),
            s: '\u1004\u103A\u1039$1\u102D',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u108C'),
            s: '\u1004\u103A\u1039$1\u102E',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u108D'),
            s: '\u1004\u103A\u1039$1\u1036',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u103A\u1033\u108B'),
            s: '\u1004\u103A\u1039$1\u103B\u102D\u102F',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u103A\u108B'),
            s: '\u1004\u103A\u1039$1\u103B\u102D',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u103A\u108C'),
            s: '\u1004\u103A\u1039$1\u103B\u102E',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u103A\u108D'),
            s: '\u1004\u103A\u1039$1\u103B\u1036',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u103A\u108E'),
            s: '$1\u103B\u102D\u1036',
        },
        {
            p: RegExp('^' + '\u108B'),
            s: '\u1004\u103A\u1039\u102D',
        },
        {
            p: RegExp('^' + '\u108C'),
            s: '\u1004\u103A\u1039\u102E',
        },
        {
            p: RegExp('^' + '\u108D'),
            s: '\u1004\u103A\u1039\u1036',
        },
        {
            p: RegExp('^' + '\u106A'),
            s: '\u1009',
        },
        {
            p: RegExp('^' + '\u106B'),
            s: '\u100A',
        },
        {
            p: RegExp('^' + '\u108F'),
            s: '\u1014',
        },
        {
            p: RegExp('^' + '\u1090'),
            s: '\u101B',
        },
        {
            p: RegExp('^' + '\u1086'),
            s: '\u103F',
        },
        {
            p: RegExp('^' + '[\u103A\u107D]'),
            s: '\u103B',
        },
        {
            p: RegExp('^' + '([\u103B\u107E-\u1084])+'),
            s: '\u103C',
        },
        {
            p: RegExp('^' + '\u103C*\u108A'),
            s: '\u103D\u103E',
        },
        {
            p: RegExp('^' + '\u103C'),
            s: '\u103D',
        },
        {
            p: RegExp('^' + '[\u103D\u1087]'),
            s: '\u103E',
        },
        {
            p: RegExp('^' + '\u1088'),
            s: '\u103E\u102F',
        },
        {
            p: RegExp('^' + '\u1089'),
            s: '\u103E\u1030',
        },
        {
            p: RegExp('^' + '\u1033'),
            s: '\u102F',
        },
        {
            p: RegExp('^' + '\u1034'),
            s: '\u1030',
        },
        {
            p: RegExp('^' + '\u1039'),
            s: '\u103A',
        },
        {
            p: RegExp('^' + '[\u1094\u1095]'),
            s: '\u1037',
        },
        {
            p: RegExp('^' + '\u1025\u1039'),
            s: '\u1009\u103A',
        },
        {
            p: RegExp('^' + '\u1025\u1061'),
            s: '\u1009\u1039\u1001',
        },
        {
            p: RegExp('^' + '\u1025\u1062'),
            s: '\u1009\u1039\u1002',
        },
        {
            p: RegExp('^' + '\u1025\u1065'),
            s: '\u1009\u1039\u1005',
        },
        {
            p: RegExp('^' + '\u1025\u1068'),
            s: '\u1009\u1039\u1007',
        },
        {
            p: RegExp('^' + '\u1025\u1076'),
            s: '\u1009\u1039\u1013',
        },
        {
            p: RegExp('^' + '\u1025\u1078'),
            s: '\u1009\u1039\u1015',
        },
        {
            p: RegExp('^' + '\u1025\u107A'),
            s: '\u1009\u1039\u1017',
        },
        {
            p: RegExp('^' + '\u1025\u1079'),
            s: '\u1009\u1039\u1016',
        },
        {
            p: RegExp('^' + '\u105A'),
            s: '\u102B\u103A',
        },
        {
            p: RegExp('^' + '\u1060'),
            s: '\u1039\u1000',
        },
        {
            p: RegExp('^' + '\u1061'),
            s: '\u1039\u1001',
        },
        {
            p: RegExp('^' + '\u1062'),
            s: '\u1039\u1002',
        },
        {
            p: RegExp('^' + '\u1063'),
            s: '\u1039\u1003',
        },
        {
            p: RegExp('^' + '\u1065'),
            s: '\u1039\u1005',
        },
        {
            p: RegExp('^' + '[\u1066\u1067]'),
            s: '\u1039\u1006',
        },
        {
            p: RegExp('^' + '\u1068'),
            s: '\u1039\u1007',
        },
        {
            p: RegExp('^' + '\u1069'),
            s: '\u1039\u1008',
        },
        {
            p: RegExp('^' + '\u106C'),
            s: '\u1039\u100B',
        },
        {
            p: RegExp('^' + '\u106D'),
            s: '\u1039\u100C',
        },
        {
            p: RegExp('^' + '\u1070'),
            s: '\u1039\u100F',
        },
        {
            p: RegExp('^' + '[\u1071\u1072]'),
            s: '\u1039\u1010',
        },
        {
            p: RegExp('^' + '\u1096'),
            s: '\u1039\u1010\u103D',
        },
        {
            p: RegExp('^' + '[\u1073\u1074]'),
            s: '\u1039\u1011',
        },
        {
            p: RegExp('^' + '\u1075'),
            s: '\u1039\u1012',
        },
        {
            p: RegExp('^' + '\u1076'),
            s: '\u1039\u1013',
        },
        {
            p: RegExp('^' + '\u1077'),
            s: '\u1039\u1014',
        },
        {
            p: RegExp('^' + '\u1078'),
            s: '\u1039\u1015',
        },
        {
            p: RegExp('^' + '\u1079'),
            s: '\u1039\u1016',
        },
        {
            p: RegExp('^' + '\u107A'),
            s: '\u1039\u1017',
        },
        {
            p: RegExp('^' + '[\u107B\u1093]'),
            s: '\u1039\u1018',
        },
        {
            p: RegExp('^' + '\u107C'),
            s: '\u1039\u1019',
        },
        {
            p: RegExp('^' + '\u1085'),
            s: '\u1039\u101C',
        },
        {
            p: RegExp('^' + '\u108E'),
            s: '\u102D\u1036',
        },
        {
            p: RegExp('^' + '\u106E'),
            s: '\u100D\u1039\u100D',
        },
        {
            p: RegExp('^' + '\u106F'),
            s: '\u100D\u1039\u100E',
        },
        {
            p: RegExp('^' + '\u1091'),
            s: '\u100F\u1039\u100D',
        },
        {
            p: RegExp('^' + '\u1092'),
            s: '\u100B\u1039\u100C',
        },
        {
            p: RegExp('^' + '\u1097'),
            s: '\u100B\u1039\u100B',
        },
        {
            p: RegExp('^' + '\u104E'),
            s: '\u104E\u1004\u103A\u1038',
        },
    ];
    var rules1 = [
        {
            p: RegExp('^' + '\u1040([^\u1040-\u1049])'),
            s: '\u101D$1',
            matchOnStart: 'true',
        },
        {
            p: RegExp('^' + '\u1044([^\u1040-\u1049])'),
            s: '\u104E$1',
            matchOnStart: 'true',
            revisit: 0,
        },
        {
            p: RegExp('^' + '([^\u1040-\u1049])\u1040$'),
            s: '$1\u101D',
        },
        {
            p: RegExp('^' + '([^\u1040-\u1049])\u1044$'),
            s: '$1\u104E',
        },
        {
            p: RegExp('^' + '([\u102B-\u103F])\u1040([^\u1040-\u1049])'),
            s: '$1\u101D$2',
        },
        {
            p: RegExp('^' + '([\u102B-\u103F])\u1044([^\u1040-\u1049])'),
            s: '$1\u104E$2',
        },
    ];
    var rules2 = [
        {
            p: RegExp('^' + '([ \u00A0\u1680\u2000-\u200D\u202F\u205F\u2060\u3000\uFEFF])\u1037'),
            s: '\u1037$1',
        },
        {
            p: RegExp('^' + '([ \u00A0\u1680\u2000-\u200D\u202F\u205F\u2060\u3000\uFEFF]+)([\u102B-\u1030\u1032-\u103B\u103D\u103E])'),
            s: '$2',
        },
        {
            p: RegExp('^' + '\u1037+'),
            s: '\u1037',
        },
        {
            p: RegExp('^' + '\u1031+\u1004\u103A\u1039([\u1000-\u1021])'),
            s: '\u1004\u103A\u1039$1\u1031',
        },
        {
            p: RegExp('^' + '\u1031+\u1037+([\u1000-\u1021])'),
            s: '$1\u1031\u1037',
        },
        {
            p: RegExp('^' + '\u1031+\u103C([\u1000-\u1021])'),
            s: '$1\u103C\u1031',
        },
        {
            p: RegExp('^' + '\u1031+([\u1000-\u1021])([\u103B\u103D\u103E]+)'),
            s: '$1$2\u1031',
        },
        {
            p: RegExp('^' + '\u1031+([\u1000-\u102A])'),
            s: '$1\u1031',
        },
    ];
    var rules3 = [
        {
            p: RegExp('^' + '\u103B\u103A'),
            s: '\u103A\u103B',
        },
        {
            p: RegExp('^' + '\u1025\u102E'),
            s: '\u1026',
        },
        {
            p: RegExp('^' + '\u103A\u1037'),
            s: '\u1037\u103A',
        },
        {
            p: RegExp('^' + '\u1036([\u103B-\u103E]*)([\u102B-\u1030\u1032]+)'),
            s: '$1$2\u1036',
        },
        {
            p: RegExp('^' + '([\u102B\u102C\u102F\u1030])([\u102D\u102E\u1032])'),
            s: '$2$1',
        },
        {
            p: RegExp('^' + '\u103C([\u1000-\u1021])'),
            s: '$1\u103C',
        },
    ];
    var rules4 = [
        {
            p: RegExp('^' + '([\u103B-\u103E])\u1039([\u1000-\u1021])'),
            s: '\u1039$2$1',
        },
        {
            p: RegExp('^' + '\u103C\u103A\u1039([\u1000-\u1021])'),
            s: '\u103A\u1039$1\u103C',
        },
        {
            p: RegExp('^' + '\u1036([\u103B-\u103E]+)'),
            s: '$1\u1036',
        },
    ];
    var rules5 = [
        {
            p: RegExp('^' + '([\u103C-\u103E]+)\u103B'),
            s: '\u103B$1',
        },
        {
            p: RegExp('^' + '([\u103D\u103E]+)\u103C'),
            s: '\u103C$1',
        },
        {
            p: RegExp('^' + '\u103E\u103D'),
            s: '\u103D\u103E',
        },
        {
            p: RegExp('^' + '([\u1031]+)([\u102B-\u1030\u1032]*)\u1039([\u1000-\u1021])'),
            s: '\u1039$3$1$2',
        },
        {
            p: RegExp('^' + '([\u102B-\u1030\u1032]+)\u1039([\u1000-\u1021])'),
            s: '\u1039$2$1',
        },
        {
            p: RegExp('^' + '([\u103B-\u103E]*)([\u1031]+)([\u103B-\u103E]*)'),
            s: '$1$3$2',
        },
        {
            p: RegExp('^' + '\u1037([\u102D-\u1030\u1032\u1036\u103B-\u103E]+)'),
            s: '$1\u1037',
        },
        {
            p: RegExp('^' + '([\u102B-\u1030\u1032]+)([\u103B-\u103E]+)'),
            s: '$2$1',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])([\u102B-\u1032\u1036\u103B-\u103E])\u103A([\u1000-\u1021])'),
            s: '$1\u103A$2$3',
        },
    ];
    var rules6 = [
        {
            p: RegExp('^' + '\u1005\u103B'),
            s: '\u1008',
        },
        {
            p: RegExp('^' + '([\u102B-\u1032])([\u103B-\u103E])'),
            s: '$2$1',
        },
        {
            p: RegExp('^' + '([\u103C-\u103E])\u103B'),
            s: '\u103B$1',
        },
        {
            p: RegExp('^' + '([\u103D\u103E])\u103C'),
            s: '\u103C$1',
        },
        {
            p: RegExp('^' + '\u103E\u103D'),
            s: '\u103D\u103E',
        },
        {
            p: RegExp('^' + '\u1038([\u000136u\u102B-\u1030\u1032\u1037\u103A-\u103F])'),
            s: '$1\u1038',
        },
        {
            p: RegExp('^' + '\u1036\u102F'),
            s: '\u102F\u1036',
        },
    ];
    var rules7 = [
        {
            p: RegExp('^' + '\u102D\u102D+'),
            s: '\u102D',
        },
        {
            p: RegExp('^' + '\u102E\u102E+'),
            s: '\u102E',
        },
        {
            p: RegExp('^' + '\u102F\u102F+'),
            s: '\u102F',
        },
        {
            p: RegExp('^' + '\u1030\u1030+'),
            s: '\u1030',
        },
        {
            p: RegExp('^' + '\u1032\u1032+'),
            s: '\u1032',
        },
        {
            p: RegExp('^' + '\u1036\u1036+'),
            s: '\u1036',
        },
        {
            p: RegExp('^' + '\u1037\u1037+'),
            s: '\u1037',
        },
        {
            p: RegExp('^' + '\u1039\u1039+'),
            s: '\u1039',
        },
        {
            p: RegExp('^' + '\u103A\u103A+'),
            s: '\u103A',
        },
        {
            p: RegExp('^' + '\u103B\u103B+'),
            s: '\u103B',
        },
        {
            p: RegExp('^' + '\u103C\u103C+'),
            s: '\u103C',
        },
        {
            p: RegExp('^' + '\u103D\u103D+'),
            s: '\u103D',
        },
        {
            p: RegExp('^' + '\u103E\u103E+'),
            s: '\u103E',
        },
        {
            p: RegExp('^' + '\u102F[\u1030\u103A]'),
            s: '\u102F',
        },
        {
            p: RegExp('^' + '\u102D\u102E'),
            s: '\u102E',
        },
        {
            p: RegExp('^' + '([ \u00A0\u1680\u2000-\u200D\u202F\u205F\u2060\u3000\uFEFF])+([\u102B-\u1032\u1036-\u103E])'),
            s: '$2',
        },
        {
            p: RegExp('^' + '\u200B+'),
            s: '',
            matchOnStart: 'true',
        },
        {
            p: RegExp('^' + '\u200B+$'),
            s: '',
        },
        {
            p: RegExp('^' + '[ \u00A0\u1680\u2000-\u200D\u202F\u205F\u2060\u3000\uFEFF]*\u200B[ \u00A0\u1680\u2000-\u200D\u202F\u205F\u2060\u3000\uFEFF]*'),
            s: '\u200B',
        },
    ];
    return [rules0, rules1, rules2, rules3, rules4, rules5, rules6, rules7];
}
// END OF TRANSLITERATION RULES
// TRANSLITERATION RULES
// Input path: genconvert/input/my-t-my-d0-zawgyi.txt
function getAllRulesU2Z() {
    var rules0 = [
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u103B'),
            s: '$1\u103A\u1064',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u102D\u1036'),
            s: '$1\u108E',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u102D'),
            s: '$1\u108B',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u102E'),
            s: '$1\u108C',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u1036'),
            s: '$1\u108D',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u1031'),
            s: '$1\u1031\u1064',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u103B\u102D\u102F'),
            s: '$1\u103A\u1033\u108B',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u103B\u102D'),
            s: '$1\u103A\u108B',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u103B\u102E\u102F'),
            s: '$1\u103A\u108C\u1033',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u103B\u102E'),
            s: '$1\u103A\u108C',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u103B\u1036'),
            s: '$1\u103A\u108D',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])\u103C'),
            s: '$1\u103B\u1064',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039\u102D'),
            s: '\u108B',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039\u102E'),
            s: '\u108C',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039\u1036'),
            s: '\u108D',
        },
        {
            p: RegExp('^' + '[\u1004\u101B\u105A]\u103A\u1039([\u1000-\u1021])'),
            s: '$1\u1064',
        },
        {
            p: RegExp('^' + '\u1025([\u102B-\u1030\u1032])\u1038'),
            s: '\u106A$1\u1038',
        },
        {
            p: RegExp('^' + '\u1025\u102F\u1036'),
            s: '\u1025\u1036\u1033',
        },
        {
            p: RegExp('^' + '\u102D\u1036'),
            s: '\u108E',
        },
        {
            p: RegExp('^' + '\u103D\u103E'),
            s: '\u108A',
        },
        {
            p: RegExp('^' + '\u103E\u102F'),
            s: '\u1088',
        },
        {
            p: RegExp('^' + '\u103E\u1030'),
            s: '\u1089',
        },
        {
            p: RegExp('^' + '\u103A'),
            s: '\u1039',
        },
        {
            p: RegExp('^' + '\u103B'),
            s: '\u103A',
        },
        {
            p: RegExp('^' + '\u103C'),
            s: '\u103B',
        },
        {
            p: RegExp('^' + '\u103D'),
            s: '\u103C',
        },
        {
            p: RegExp('^' + '\u103E'),
            s: '\u103D',
        },
        {
            p: RegExp('^' + '\u103F'),
            s: '\u1086',
        },
        {
            p: RegExp('^' + '([\u1019])\u103E\u1030'),
            s: '$1\u103D\u1034',
        },
        {
            p: RegExp('^' + '\u102B\u103A'),
            s: '\u105A',
        },
        {
            p: RegExp('^' + '\u1039\u1010\u103D'),
            s: '\u1096',
        },
        {
            p: RegExp('^' + '\u1039\u1000'),
            s: '\u1060',
        },
        {
            p: RegExp('^' + '\u1039\u1001'),
            s: '\u1061',
        },
        {
            p: RegExp('^' + '\u1039\u1002'),
            s: '\u1062',
        },
        {
            p: RegExp('^' + '\u1039\u1003'),
            s: '\u1063',
        },
        {
            p: RegExp('^' + '\u1039\u1005'),
            s: '\u1065',
        },
        {
            p: RegExp('^' + '\u1039\u1006'),
            s: '\u1067',
        },
        {
            p: RegExp('^' + '\u1039\u1007'),
            s: '\u1068',
        },
        {
            p: RegExp('^' + '\u1039\u1008'),
            s: '\u1069',
        },
        {
            p: RegExp('^' + '\u1039\u100B'),
            s: '\u106C',
        },
        {
            p: RegExp('^' + '\u1039\u100C'),
            s: '\u106D',
        },
        {
            p: RegExp('^' + '\u1039\u100F'),
            s: '\u1070',
        },
        {
            p: RegExp('^' + '\u1039\u1010'),
            s: '\u1072',
        },
        {
            p: RegExp('^' + '\u1039\u1011'),
            s: '\u1074',
        },
        {
            p: RegExp('^' + '\u1039\u1012'),
            s: '\u1075',
        },
        {
            p: RegExp('^' + '\u1039\u1013'),
            s: '\u1076',
        },
        {
            p: RegExp('^' + '\u1039\u1014'),
            s: '\u1077',
        },
        {
            p: RegExp('^' + '\u1039\u1015'),
            s: '\u1078',
        },
        {
            p: RegExp('^' + '\u1039\u1016'),
            s: '\u1079',
        },
        {
            p: RegExp('^' + '\u1039\u1017'),
            s: '\u107A',
        },
        {
            p: RegExp('^' + '\u1039\u1018'),
            s: '\u1093',
        },
        {
            p: RegExp('^' + '\u1039\u1019'),
            s: '\u107C',
        },
        {
            p: RegExp('^' + '\u1039\u101C'),
            s: '\u1085',
        },
        {
            p: RegExp('^' + '\u100D\u1039\u100D'),
            s: '\u106E',
        },
        {
            p: RegExp('^' + '\u100D\u1039\u100E'),
            s: '\u106F',
        },
        {
            p: RegExp('^' + '\u100F\u1039\u100D'),
            s: '\u1091',
        },
        {
            p: RegExp('^' + '\u100B\u1039\u100C'),
            s: '\u1092',
        },
        {
            p: RegExp('^' + '\u100B\u1039\u100B'),
            s: '\u1097',
        },
        {
            p: RegExp('^' + '\u104E\u1004\u103A\u1038'),
            s: '\u104E',
        },
    ];
    var rules1 = [
        {
            p: RegExp('^' + '\u1014([\u1060-\u1068\u106C\u106D\u1070-\u107C\u1085\u1093\u1096])([\u102D\u102E\u1032\u1036\u1039\u1064]*)\u103B'),
            s: '\u103B\u108F$1$2',
        },
        {
            p: RegExp('^' + '\u1014\u103B([\u103C\u103D]*)(\u1031*)'),
            s: '$2\u103B\u108F$1',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u103B([\u103C\u103D]*)\u1031'),
            s: '\u1031\u103B$1$2',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u103B'),
            s: '\u103B$1',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u103D\u1031\u1037'),
            s: '\u1031$1\u1094\u103D',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])(\u108A)\u1031'),
            s: '\u1031$1$2',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])\u1064\u103B'),
            s: '\u103B$1\u1064',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])([\u103A\u103C\u103D]+)\u1031'),
            s: '\u1031$1$2',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])([\u1060-\u1068\u106C\u106D\u1070-\u107C\u1085\u1093\u1096])([\u102D\u102E\u1032\u1036\u1039\u1064]*)\u103B'),
            s: '\u103B$1$2$3',
        },
        {
            p: RegExp('^' + '([\u1000-\u102A])\u1031'),
            s: '\u1031$1',
        },
        {
            p: RegExp('^' + '\u1014([\u1060-\u1068\u106C\u106D\u1070-\u107C\u1085\u1093\u1096])'),
            s: '\u108F$1',
        },
        {
            p: RegExp('^' + '\u1014([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A])([\u102D\u102E\u1032\u1036\u1039\u1064])\u1037'),
            s: '\u108F$1$2\u1094',
        },
        {
            p: RegExp('^' + '\u1014([\u102D\u102E\u1032\u1036\u1039\u1064])([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A])\u1037'),
            s: '\u108F$1$2\u1094',
        },
        {
            p: RegExp('^' + '\u1014([\u102D\u102E\u1032\u1036\u1039\u1064])\u1037'),
            s: '\u1014$1\u1094',
        },
        {
            p: RegExp('^' + '\u1014\u1032\u1037'),
            s: '\u1014\u1032\u1094',
        },
        {
            p: RegExp('^' + '\u1014\u1037'),
            s: '\u1014\u1094',
        },
        {
            p: RegExp('^' + '\u1014\u1032([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A])\u1037'),
            s: '\u108F$1\u1032\u1094',
        },
        {
            p: RegExp('^' + '\u1014([\u102D\u102E\u1032\u1036\u1039\u1064])([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A])'),
            s: '\u108F$1$2',
        },
        {
            p: RegExp('^' + '\u1014([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A])([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u108F$1$2',
        },
        {
            p: RegExp('^' + '\u1014([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A])\u1037'),
            s: '\u108F$1\u1094',
        },
        {
            p: RegExp('^' + '\u1014([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A])'),
            s: '\u108F$1',
        },
        {
            p: RegExp('^' + '([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A])([\u102D\u102E\u1032\u1036\u1039\u1064]*)\u1037'),
            s: '$1$2\u1094',
        },
        {
            p: RegExp('^' + '([^\u1040-\u1049])\u1040([\u102B-\u103F])'),
            s: '$1\u101D$2',
        },
        {
            p: RegExp('^' + '([^\u1040-\u1049])\u104E'),
            s: '$1\u1044',
        },
        {
            p: RegExp('^' + '\u1031\u1040([^\u1040-\u1049])'),
            s: '\u1031\u101D$1',
        },
        {
            p: RegExp('^' + '\u1009\u103A'),
            s: '\u1025\u103A',
        },
        {
            p: RegExp('^' + '\u1025\u102E'),
            s: '\u1026',
        },
        {
            p: RegExp('^' + '\u1037\u103A'),
            s: '\u103A\u1037',
        },
        {
            p: RegExp('^' + '([\u102B\u102C\u102F\u1030])([\u102D\u102E\u1032])'),
            s: '$2$1',
        },
    ];
    var rules2 = [
        {
            p: RegExp('^' + '\u103A\u103C'),
            s: '\u103C\u107D',
        },
        {
            p: RegExp('^' + '\u103C\u1094'),
            s: '\u103C\u1095',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])([\u1060-\u1068\u106C\u106D\u1070-\u107C\u1085\u1093\u1096])([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u1083$1$2$3',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])([\u1060-\u1068\u106C\u106D\u1070-\u107C\u1085\u1093\u1096])([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u1084$1$2$3',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])([\u1060-\u1068\u106C\u106D\u1070-\u107C\u1085\u1093\u1096])'),
            s: '\u1081$1$2',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])([\u1060-\u1068\u106C\u106D\u1070-\u107C\u1085\u1093\u1096])'),
            s: '\u1082$1$2',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])([\u103C\u108A])([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u1083$1$2$3',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])([\u103C\u108A])([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u1084$1$2$3',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])\u103D([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u107F$1\u1087$2',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])\u103D([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u1080$1\u1087$2',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])\u102F([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u107F$1\u1033$2',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])\u102F([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u1080$1\u1033$2',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])\u1030([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u107F$1\u1034$2',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])\u1030([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u1080$1\u1034$2',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A]*)([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u107F$1$2$3',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A]*)([\u102D\u102E\u1032\u1036\u1039\u1064])'),
            s: '\u1080$1$2$3',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])([\u103C\u108A])'),
            s: '\u1081$1$2',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])([\u103C\u108A])'),
            s: '\u1082$1$2',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])\u103D'),
            s: '\u103B$1\u1087',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])\u103D'),
            s: '\u107E$1\u1087',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])\u102F'),
            s: '\u103B$1\u1033',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])\u102F'),
            s: '\u107E$1\u1033',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])\u1030'),
            s: '\u103B$1\u1034',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])\u1030'),
            s: '\u107E$1\u1034',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u100A\u106B])'),
            s: '\u1082$1',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1009\u106A])'),
            s: '\u103B\u106A',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])'),
            s: '\u103B$1',
        },
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])'),
            s: '\u107E$1',
        },
        {
            p: RegExp('^' + '\u1009([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A])'),
            s: '\u106A$1',
        },
        {
            p: RegExp('^' + '\u100A([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A])'),
            s: '\u106B$1',
        },
        {
            p: RegExp('^' + '\u103D\u102D'),
            s: '\u102D\u103D',
        },
        {
            p: RegExp('^' + '\u103A([\u102D\u102E\u1032\u1036\u1039\u1064])\u102F[\u1037\u1094\u1095]'),
            s: '\u103A$1\u1033\u1095',
        },
        {
            p: RegExp('^' + '\u103A\u102F[\u1037\u1094\u1095]'),
            s: '\u103A\u1033\u1095',
        },
        {
            p: RegExp('^' + '\u103A\u102F'),
            s: '\u103A\u1033',
        },
        {
            p: RegExp('^' + '\u1064\u102E'),
            s: '\u108C',
        },
    ];
    var rules3 = [
        {
            p: RegExp('^' + '\u1037([\u102D-\u1030\u1032\u1036])'),
            s: '$1\u1037',
        },
        {
            p: RegExp('^' + '([\u1000-\u1021])([\u102B-\u1032\u1036\u103B-\u103E])\u103A([\u1000-\u1021])'),
            s: '$1\u103A$2$3',
        },
        {
            p: RegExp('^' + '\u103D\u102F'),
            s: '\u1088',
        },
        {
            p: RegExp('^' + '\u1033\u1094'),
            s: '\u1033\u1095',
        },
        {
            p: RegExp('^' + '([\u103B\u107E-\u1084])([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A]*)([\u102D\u102E\u1032\u1036\u1039\u1064]*)\u102F'),
            s: '$1$2$3$4\u1033',
        },
        {
            p: RegExp('^' + '([\u103B\u107E-\u1084])([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A]*)([\u102D\u102E\u1032\u1036\u1039\u1064]*)\u102F'),
            s: '$1$2$3$4\u1033',
        },
        {
            p: RegExp('^' + '([\u103B\u107E-\u1084])([\u1001\u1002\u1004\u1005\u1007\u100B-\u100E\u1012\u1013\u1015-\u1017\u1019\u101D\u1020\u1025\u1026\u108F])([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A]*)([\u102D\u102E\u1032\u1036\u1039\u1064]*)\u1030'),
            s: '$1$2$3$4\u1034',
        },
        {
            p: RegExp('^' + '([\u103B\u107E-\u1084])([\u1000\u1003\u1006\u1009\u100A\u100F-\u1011\u1018\u101C\u101E\u101F\u1021])([\u102F\u1030\u1037\u103C\u103D\u1087-\u108A]*)([\u102D\u102E\u1032\u1036\u1039\u1064]*)\u1030'),
            s: '$1$2$3$4\u1034',
        },
    ];
    var rules4 = [
        {
            p: RegExp('^' + '([\u103D\u103E])\u103C'),
            s: '\u103C$1',
        },
        {
            p: RegExp('^' + '\u103E\u103D'),
            s: '\u103D\u103E',
        },
        {
            p: RegExp('^' + '\u1038([\u102B-\u1030\u1032\u103C-\u103F])'),
            s: '$1\u1038',
        },
        {
            p: RegExp('^' + '\u1038([\u1036\u1037\u103A])'),
            s: '$1\u1038',
        },
        {
            p: RegExp('^' + '\u103A([\u1064\u108B-\u108E])\u102D\u102F'),
            s: '\u103A$1\u102D\u1033',
        },
        {
            p: RegExp('^' + '\u103A\u102D\u102F'),
            s: '\u103A\u102D\u1033',
        },
    ];
    var rules5 = [
        {
            p: RegExp('^' + '([\u1000-\u1021])\u103B\u103A'),
            s: '$1\u103A\u103B',
        },
        {
            p: RegExp('^' + '([\u103C-\u103E])\u103B'),
            s: '\u103B$1',
        },
        {
            p: RegExp('^' + '([\u103D\u103E])\u103C'),
            s: '\u103C$1',
        },
        {
            p: RegExp('^' + '\u103E\u103D'),
            s: '\u103D\u103E',
        },
        {
            p: RegExp('^' + '([\u102D-\u1030\u1032])\u103A([\u1000-\u1021])\u103A'),
            s: '$1$2\u103A',
        },
        {
            p: RegExp('^' + '\u102D\u103A'),
            s: '\u102D',
        },
        {
            p: RegExp('^' + '\u102E\u103A'),
            s: '\u102E',
        },
        {
            p: RegExp('^' + '\u102F\u103A'),
            s: '\u102F',
        },
        {
            p: RegExp('^' + '\u102D\u102E'),
            s: '\u102E',
        },
        {
            p: RegExp('^' + '\u102F\u1030'),
            s: '\u102F',
        },
        {
            p: RegExp('^' + '\u102B\u102B+'),
            s: '\u102B',
        },
        {
            p: RegExp('^' + '\u102C\u102C+'),
            s: '\u102C',
        },
        {
            p: RegExp('^' + '\u102D\u102D+'),
            s: '\u102D',
        },
        {
            p: RegExp('^' + '\u102E\u102E+'),
            s: '\u102E',
        },
        {
            p: RegExp('^' + '\u102F\u102F+'),
            s: '\u102F',
        },
        {
            p: RegExp('^' + '\u1030\u1030+'),
            s: '\u1030',
        },
        {
            p: RegExp('^' + '\u1031\u1031+'),
            s: '\u1031',
        },
        {
            p: RegExp('^' + '\u1032\u1032+'),
            s: '\u1032',
        },
        {
            p: RegExp('^' + '\u1036\u1036+'),
            s: '\u1036',
        },
        {
            p: RegExp('^' + '\u103A\u103A+'),
            s: '\u103A',
        },
        {
            p: RegExp('^' + '\u103B\u103B+'),
            s: '\u103B',
        },
        {
            p: RegExp('^' + '\u103C\u103C+'),
            s: '\u103C',
        },
        {
            p: RegExp('^' + '\u103D\u103D+'),
            s: '\u103D',
        },
        {
            p: RegExp('^' + '\u103E\u103E+'),
            s: '\u103E',
        },
        {
            p: RegExp('^' + '([\u102F\u1033])\u102D'),
            s: '\u102D$1',
        },
        {
            p: RegExp('^' + '([\u102F\u1033])\u1036'),
            s: '\u1036$1',
        },
        {
            p: RegExp('^' + '\u1037\u1039'),
            s: '\u1039\u1037',
        },
        {
            p: RegExp('^' + '\u1032\u103C'),
            s: '\u103C\u1032',
        },
        {
            p: RegExp('^' + '\u102E\u103C'),
            s: '\u103C\u102E',
        },
        {
            p: RegExp('^' + '\u103D\u1088'),
            s: '\u1088',
        },
    ];
    return [rules0, rules1, rules2, rules3, rules4, rules5];
}
// END OF TRANSLITERATION RULES
// TRANSLITERATION RULES
// Input path: genconvert/input/my_normalize_zawgyi_transliteration_rules.txt
function getAllRulesZNorm() {
    var rules0 = [
        {
            p: RegExp('^' + '\u1009\u1039'),
            s: '\u1025\u1039',
        },
        {
            p: RegExp('^' + '\u1025\u102E'),
            s: '\u1026',
        },
        {
            p: RegExp('^' + '\u102F([\u102D\u1036])'),
            s: '$1\u102F',
        },
        {
            p: RegExp('^' + '\u1039([\u1037\u1094\u1095])'),
            s: '$1\u1039',
        },
        {
            p: RegExp('^' + '\u103C([\u102E\u1032])'),
            s: '$1\u103C',
        },
        {
            p: RegExp('^' + '\u1033\u102D'),
            s: '\u102D\u1033',
        },
        {
            p: RegExp('^' + '\u103D\u102D'),
            s: '\u102D\u103D',
        },
        {
            p: RegExp('^' + '\u1089'),
            s: '\u103D\u1034',
        },
        {
            p: RegExp('^' + '\u1064\u103A'),
            s: '\u103A\u1064',
        },
        {
            p: RegExp('^' + '\u1067'),
            s: '\u1066',
        },
        {
            p: RegExp('^' + '\u1072'),
            s: '\u1071',
        },
        {
            p: RegExp('^' + '\u1074'),
            s: '\u1073',
        },
        {
            p: RegExp('^' + '\u1093'),
            s: '\u107B',
        },
    ];
    var rules1 = [
        {
            p: RegExp('^' + '\u102D+'),
            s: '\u102D',
        },
        {
            p: RegExp('^' + '\u102E+'),
            s: '\u102E',
        },
        {
            p: RegExp('^' + '\u102F+'),
            s: '\u102F',
        },
        {
            p: RegExp('^' + '\u1030+'),
            s: '\u1030',
        },
        {
            p: RegExp('^' + '\u1032+'),
            s: '\u1032',
        },
        {
            p: RegExp('^' + '\u1033+'),
            s: '\u1033',
        },
        {
            p: RegExp('^' + '\u1034+'),
            s: '\u1034',
        },
        {
            p: RegExp('^' + '\u1036+'),
            s: '\u1036',
        },
        {
            p: RegExp('^' + '\u1037+'),
            s: '\u1037',
        },
        {
            p: RegExp('^' + '\u1039+'),
            s: '\u1039',
        },
        {
            p: RegExp('^' + '\u103A+'),
            s: '\u103A',
        },
        {
            p: RegExp('^' + '\u103B+'),
            s: '\u103B',
        },
        {
            p: RegExp('^' + '\u103C+'),
            s: '\u103C',
        },
        {
            p: RegExp('^' + '\u103D+'),
            s: '\u103D',
        },
        {
            p: RegExp('^' + '\u103E+'),
            s: '\u103D',
        },
    ];
    var rules2 = [
        {
            p: RegExp('^' + '[\u1037\u1094\u1095]+'),
            s: '\u1037',
        },
        {
            p: RegExp('^' + '\u1005\u103A'),
            s: '\u1008',
        },
        {
            p: RegExp('^' + '\u101D'),
            s: '\u1040',
        },
        {
            p: RegExp('^' + '\u104E$'),
            s: '\u1044',
        },
        {
            p: RegExp('^' + '\u102F\u1088'),
            s: '\u1088',
        },
        {
            p: RegExp('^' + '\u103B\u103A'),
            s: '\u103A\u103B',
        },
        {
            p: RegExp('^' + '\u103D\u102F'),
            s: '\u1088',
        },
        {
            p: RegExp('^' + '\u103D\u1088'),
            s: '\u1088',
        },
        {
            p: RegExp('^' + '\u103B([\u1000-\u1021])\u103B$'),
            s: '\u103B$1',
        },
    ];
    var rules3 = [
        {
            p: RegExp('^' + '[\u103B\u107E-\u1084]+'),
            s: '\u103B',
        },
        {
            p: RegExp('^' + '\u1031\u1031+'),
            s: '\u1031',
        },
    ];
    var rules4 = [
        {
            p: RegExp('^' + '([\u103B\u107E-\u1084])([\u1000-\u1021])\u1036\u102F'),
            s: '$1$2\u1033\u1036',
        },
    ];
    var rules5 = [
        {
            p: RegExp('^' + '\u1033'),
            s: '\u102F',
        },
    ];
    var rules6 = [
        {
            p: RegExp('^' + '\u1036\u102F'),
            s: '\u102F\u1036',
        },
        {
            p: RegExp('^' + '\u1037\u1039\u1037'),
            s: '\u1037\u1039',
        },
        {
            p: RegExp('^' + '\u106B'),
            s: '\u100A',
        },
    ];
    var rules7 = [
        {
            p: RegExp('^' + '[    -‍⁠  　﻿]+([\u1000-\u109F])'),
            s: '$1',
            revisit: 0,
        },
        {
            p: RegExp('^' + '\u200B+'),
            s: '',
            matchOnStart: 'true',
        },
        {
            p: RegExp('^' + '\u200B+$'),
            s: '',
        },
    ];
    return [rules0, rules1, rules2, rules3, rules4, rules5, rules6, rules7];
}
// END OF TRANSLITERATION RULES
var ZawgyiConverter = /** @class */ (function () {
    function ZawgyiConverter() {
    }
    ZawgyiConverter.prototype.zawgyiToUnicode = function (inString) {
        return runAllPhases(getAllRulesZ2U(), inString);
    };
    ZawgyiConverter.prototype.unicodeToZawgyi = function (inString) {
        return runAllPhases(getAllRulesU2Z(), inString);
    };
    ZawgyiConverter.prototype.normalizeZawgyi = function (inString) {
        return runAllPhases(getAllRulesZNorm(), inString);
    };
    return ZawgyiConverter;
}());
exports.ZawgyiConverter = ZawgyiConverter;
