import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

// @ts-ignore
import Table from 'braft-extensions/dist/table';
import 'braft-extensions/dist/table.css';

// @ts-ignore
import ColorPicker from 'braft-extensions/dist/color-picker';
import 'braft-extensions/dist/color-picker.css';

const tableOptions = {
	defaultColumns: 3, // 默认列数
	defaultRows: 3, // 默认行数
	withDropdown: true, // 插入表格前是否弹出下拉菜单
	exportAttrString: '', // 指定输出HTML时附加到table标签上的属性字符串
	// includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
	// excludeEditors: ['editor-id-2'], // 指定该模块对哪些BraftEditor无效
};

BraftEditor.use(Table(tableOptions));

const colorPickerOptions = {
	// includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
	// excludeEditors: ['editor-id-2'],  // 指定该模块对哪些BraftEditor无效
	theme: 'light', // 指定取色器样式主题，支持dark和light两种样式
};

BraftEditor.use(ColorPicker(colorPickerOptions));
