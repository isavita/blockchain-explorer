import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoreCourses from '../api/core.json';
import ElectiveCourses from '../api/elective.json';

const Courses = {
  core: CoreCourses,
  electives: ElectiveCourses
};

class CourseSelect extends Component {
  constructor(props) {
    super(props);

    this.onSelectDepartment = this.onSelectDepartment.bind(this);
    this.onSelectCourse = this.onSelectCourse.bind(this);
    this.fetch = this.fetch.bind(this);

    this.state = {
      department: null,
      course: null,
      courses: [],
      _loading: false,
    };
  }

  componentWillReceiveProps(update) {
    this.setState({
      department: update.department,
      course: update.course,
    });
  }

  onSelectDepartment(ev) {
    const department = ev.target.value;
    const course = null;

    this.setState({ department, course });
    this.props.onChange({ name: 'department', value: department });
    this.props.onChange({ name: 'course', value: course });
    
    if (department) this.fetch(department);
  }

  onSelectCourse(ev) {
    const course = ev.target.value;
    this.setState({ course });
    this.props.onChange({ name: 'course', value: course });
  }

  fetch(department) {
    this.setState({ _loading: true });
    apiClient(department).then((courses) => {
      this.setState({ _loading: false, courses: courses });
    });
  }

  renderDepartmentSelect() {
    return (
      <select
        onChange={this.onSelectDepartment}
        value={this.state.department || ''}
      >
        <option value=''>
          Which department?
        </option>
        <option value='core'>
          NodeSchool: Core
        </option>
        <option value='electives'>
          NodeSchool: Electives 
        </option>
      </select>
    );
  }

  renderCourseSelect() {
    if (this.state._loading) {
      return <img alt='loading' src='/img/loading.gif' />;
    }

    if (!this.state.department || !this.state.courses.length) return <span />;

    const options = [
      <option value='' key='course-none'>Which course?</option>,
      ...this.state.courses.map((course, i) => (
        <option value={course} key={i}>
          Course: {course}
        </option>
      ))
    ];

    return (
      <select
        onChange={this.onSelectCourse}
        value={this.state.course}
      >
        { options }
      </select>
    );
  }

  render() {
    return (
      <div>
        { this.renderDepartmentSelect() }
        <br />
        { this.renderCourseSelect() }
      </div>
    );
  }
}

CourseSelect.propTypes = {
  department: PropTypes.string,
  course: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

function apiClient(department) {
  return {
    then: function (cb) {
      setTimeout(() => { cb(Courses[department]); }, 1000);
    },
  };
}

export default CourseSelect; 
