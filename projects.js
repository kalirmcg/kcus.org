$('#projects-placeholder').ready(function() {
  var currentProjects = {
    'projects':
    [
      {
        'title': 'GoTime - Statewide RTTM System',
        'img-src': 'images/projects/gotime_s.jpg',
        'location': 'Massachusetts',
        'date': '2014 - 2019',
        'description': 'KCUS is currently implementing, operating, and maintaining a software system for Massachusetts’ permanent Statewide Real Time Traffic Management (RTTM) implementation dubbed GoTime.'
      },
      {
        'title': 'RTTM Pilot Program',
        'img-src': 'images/projects/rttm_pilot2_s.jpg',
        'location': 'Massachusetts',
        'date': '2012 - Present',
        'description': 'As part of two separate projects, KCUS furnished, installed, operated and maintained the two integrated Real Time Traffic Management (RTTM) implementations within Massachusetts.'
      },
      {
        'title': 'ITMS',
        'img-src': 'images/projects/itms_s.jpg',
        'location': 'Massachusetts',
        'date': '2015 - 2020',
        'description': 'KCUS is assisting the Massachusetts Department of Transportation (MassDOT) in the detailed design and implementation process for a new Integrated Transportation Management System (ITMS) to be deployed at MassDOT\'s Highway Operations Center (HOC).'
      },
      {
        'title': 'GoTime Data Warehouse',
        'img-src': 'images/projects/gotime_dw_s.jpg',
        'location': 'Massachusetts',
        'date': '2015 - 2018',
        'description': 'KCUS is designing and implementing a data warehouse for MassDOT as part of the Statewide Real Time Traffic Management (RTTM) System. The Data Warehouse is a Redshift-based database hosted on Amazon Web Services.'
      },
      {
        'title': 'Smart Work Zones Application',
        'img-src': 'images/projects/swz_app_l1.png',
        'location': 'Massachusetts',
        'date': '2016 - 2018',
        'description': 'KCUS is currently designing and developing a Smart Work Zones (SWZ) Application for the Massachusetts Department of Transportation (MassDOT). This application will enable the integrated centralized configuration, management, and monitoring of SWZ sites and field devices throughout Massachusetts.'
      }
    ]
  };

  var softwareSystems = {
    'projects':
    [
      {
        'title': 'Cape Cod RTTM Software',
        'img-src': 'images/projects/cape_cod_rttm_s.jpg',
        'location': 'Massachusetts',
        'date': '2014 - 2015',
        'description': 'KCUS designed, integrated, and operated the Real Time Traffic Management (RTTM) Software for the permanent Hybrid VMS and Bluetooth Reader-based installation on Rt. 6, Rt. 28, Rt. 25, and Rt. 3 in the Cape Cod area.'
      },
      {
        'title': 'IPCS/SCADA Design',
        'img-src': 'images/projects/ipcs_scada_s.jpg',
        'location': 'Massachusetts',
        'date': '2014 - 2015',
        'description': 'KCUS provided technical support to the MassDOT on the design of an upgraded Integrated Project Control System (IPCS)/Supervisory Control and Data Acquisition (SCADA) which will provide tunnel management and SCADA functionality in relation to MassDOT’s roadway tunnel network and facilities.'
      },
      {
        'title': 'ATMS/ATIS Design',
        'img-src': 'images/projects/atms_atis_s.jpg',
        'location': 'Massachusetts',
        'date': '2013 - 2014',
        'description': 'KCUS provided technical support to MassDOT on the design of a new Advanced Traffic Management System (ATMS)/Advanced Traveler Information System (ATIS) which will be used at the Highway Operations Center (HOC) as the central traffic management system to manage and respond to incidents occurring along the Massachusetts highway network.'
      },
      {
        'title': 'Work Zone ITS Implementation Tool',
        'img-src': 'images/projects/swz_tool_s.jpg',
        'location': 'Massachusetts',
        'date': '2015 - 2016',
        'description': 'KCUS is part of a team working to design, develop, and implement a Work Zone ITS Implementation Tool for the Federal Highway Administration (FHWA).'
      },
      {
        'title': 'Port of New Bedford Truck Appointment System',
        'img-src': 'images/projects/new_bedford_truck_s.jpg',
        'location': 'Massachusetts',
        'date': '2008 - 2010',
        'description': 'As part of the New Bedford ITS Project, KCUS was chosen to develop a Truck Appointment System (TAS) for the Port of New Bedford. KCUS worked with MassDOT, the Harbor Development Commission, and the private terminal operator to develop a pilot system.'
      },
    ]
  };

  var transportationPlanning = {
    'projects':
    [
      {
        'title': 'PACTS Travel Speed Data Report',
        'img-src': 'images/projects/pacts_s.jpg',
        'location': 'Portland, Maine',
        'date': '2015 - 2016',
        'description': 'KCUS developed a travel speed data report on the Portland, Maine area for the Portland Area Comprehensive Transportation System (PACTS).'
      },
      {
        'title': 'ITS Planning in Colombia',
        'img-src': 'images/projects/its_colombia_s.jpg',
        'location': 'Colombia',
        'date': '2014 - 2015',
        'description': 'KCUS offered technical assistance to the Colombian Ministry of Transport regarding the planning and implementation of Intelligent Transportation System (ITS) technologies.'
      },
      {
        'title': 'KAEC Transportation Framework',
        'img-src': 'images/projects/kaec_its_s.png',
        'location': 'Saudi Arabia',
        'date': '2015 - 2016',
        'description': 'KCUS is currently developing a transportation framework for King Abdullah Economic City (KAEC), which is the largest of four economic cities currently being built in Saudi Arabia. The development of the KAEC Transportation Framework would be the first phase in the development of a more detailed transit and ITS Master Plan.'
      },
      {
        'title': 'I-90 ITS Design',
        'img-src': 'images/projects/its_strategic_plan_s.jpg',
        'location': 'Massachusetts',
        'date': '2012 - 2013',
        'description': 'KCUS participated in the preparation of the ITS Strategic Plan and the Regional Transportation Operations Strategies for the MassDOT ITS Programs. The ITS Strategic Plan provided a 5-year roadmap for the implementation of ITS to improve incident management, congestion management/customer service, and safety/security management.'
      },
      {
        'title': 'ITS Strategic Plan',
        'img-src': 'images/projects/swz_tool_s.jpg',
        'location': 'Massachusetts',
        'date': '2009 - 2010 ',
        'description': 'KCUS participated in the preparation of the ITS Strategic Plan and the Regional Transportation Operations Strategies for the MassDOT ITS Programs. The ITS Strategic Plan provided a 5-year roadmap for the implementation of ITS to improve incident management, congestion management/customer service, and safety/security management.'
      },
      {
        'title': 'I-495 ITS ConOps',
        'img-src': 'images/projects/its_conops_s.jpg',
        'location': 'Massachusetts',
        'date': '2012 - 2013',
        'description': 'KCUS developed the ITS Concepts of Operations (ConOps) and System Requirements Specification (SyRS) for the I-495 ITS deployment.'
      },
      {
        'title': 'Smart Work Zone SOPs',
        'img-src': 'images/projects/swz_standards_s.jpg',
        'location': 'Massachusetts',
        'date': '2012 - 2013',
        'description': 'KCUS assisted MassDOT with the development of Standard Operating Procedures (SOPs) for Smart Work Zone (SWZ) deployments across the state.'
      },
      {
        'title': 'Regional ITS Architecture Updates',
        'img-src': 'images/projects/regional_its_arch_s.jpg',
        'location': 'Massachusetts',
        'date': '2010',
        'description': 'KCUS reviewed and updated the four regional ITS architectures implemented in 2005 to reflect the changes in the National ITS Architecture, the reorganization of transportation agencies in Massachusetts, the updated Regional Transportation Plans (RTPs), and new transportation projects, plans, policies, procedures, and infrastructure.'
      },
      {
        'title': 'ITS Deployment and Design Guide',
        'img-src': 'images/projects/its_d_d_s.png',
        'location': 'Massachusetts',
        'date': '2010 - 2011',
        'description': 'KCUS was part of the team that created the MassDOT ITS Deployment and Design Guide. This guide provides more detailed planning and design criteria for ITS device deployments throughout the Commonwealth as established in the MassDOT ITS Strategic Plan.'
      },
      {
        'title': 'New Bedford ITS Deployment',
        'img-src': 'images/projects/new_bedford_its_s.png',
        'location': 'Massachusetts',
        'date': '2008 - 2010',
        'description': 'KCUS developed a deployment plan for the City of New Bedford\'s ITS project to support the City\'s goal of becoming the region\'s hub for passenger and freight movement.'
      },
      {
        'title': 'San Juan Light Rail Feasibility Study',
        'img-src': 'images/projects/light_rail_fs_l1.png',
        'location': 'Puerto Rico',
        'date': '2008 - 2011',
        'description': 'KCUS was part of a team commissioned to perform a feasibility study for a proposed five-mile long Light Rail Technology (LRT) project in the City of San Juan, Puerto Rico.'
      }
    ]
  };

  var currProjScr = Handlebars.templates.projects(currentProjects);
  var softSysScr = Handlebars.templates.projects(softwareSystems);
  var transPlanScr = Handlebars.templates.projects(transportationPlanning);

  $('#current-projects').html(currProjScr);
  $('#software-systems').html(softSysScr);
  $('#transportation-planning').html(transPlanScr);

  $('.proj-page-header').on('click', function() {
    console.log('here');
    $(this).find('svg').toggleClass('fa-caret-right fa-caret-down py-2 px-1');
  });

});
